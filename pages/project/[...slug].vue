<script setup>
import ArticleHeader from '@/components/articles/ArticleHeader.vue';
import ArticleBody from '@/components/articles/ArticleBody.vue';
import Toc from '@/components/articles/Toc.vue';
import { onMounted } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();

const { data: projectPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
})

const extractPageFromPath = (path) => { return path.split('/')[1] }

const meta = computed(() => {
  if (projectPost.value) {
    return {
      pageType: extractPageFromPath(projectPost.value._path),
      title: projectPost.value.title,
      author: projectPost.value.author,
      category: projectPost.value.category,
      date: date.format(projectPost.value.dates.published, 'fullDate'),
      description: projectPost.value.description,
      tags: projectPost.value.tags,
      github: projectPost.value.github ? projectPost.value.github : null
    }
  } else {
    return null;
  }
})

const intersectedTocId = ref(null);
const observer = ref(null)
const nuxtContent = ref(null)
const observerOptions = ref({
  root: 0,
  threshold: "0",
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        intersectedTocId.value = id
      }
    })
  }, {
    threshold: 1.0
  })

  document.querySelectorAll('.md-style h2[id], .md-style h3[id], .md-style h4[id]').forEach((section) => {
    observer.value?.observe(section)
  })
})
</script>

<template>
  <v-container v-if="projectPost" class="main-container w-66">
    <a id="top"></a>
    <ArticleHeader :meta="meta" />
    <v-divider class="mt-4 mb-6" color="secondary"></v-divider>
    <ArticleBody>
      <ContentDoc />
    </ArticleBody>
  </v-container>
  <Toc :links="projectPost.body.toc.links" :current-id="intersectedTocId" />

</template>


<style></style>