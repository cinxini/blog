<script setup>
import ArticleBody from '@/components/articles/ArticleBody.vue';
import ArticleHeader from '@/components/articles/ArticleHeader.vue';
import Toc from '@/components/articles/Toc.vue';
import GiscusComment from '@/components/containers/GiscusComment.vue';
import c from '@/constants/posts';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();

const intersectedTocId = ref(null);
const observer = ref(null)

const { data: projectPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
})

const meta = computed(() => {
  if (projectPost.value) {
    return {
      pageType: projectPost.value.pageType,
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

// hooks
onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        intersectedTocId.value = id
      }
    })
  }, {
    threshold: c.INTERSECT_OBS_THRESHOLD
  })

  document.querySelectorAll(c.INTERSECT_OBS_IDS).forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
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
    <v-divider class="my-0" color="base"></v-divider>
    <a id="comment-section"></a>
    <GiscusComment class="my-5" />
    <a id="bottom"></a>
  </v-container>
  <Toc :links="projectPost.body.toc.links" :current-id="intersectedTocId" />

</template>


<style></style>