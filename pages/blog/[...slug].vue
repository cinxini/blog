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

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})


const meta = computed(() => {
    if (blogPost.value) {
        return {
            pageType: blogPost.value.pageType,
            title: blogPost.value.title,
            author: blogPost.value.author,
            category: blogPost.value.category,
            date: date.format(blogPost.value.dates.published, 'fullDate'),
            description: blogPost.value.description,
            tags: blogPost.value.tags,
            github: blogPost.value.github ? blogPost.value.github : null
        }
    } else {
        return null;
    }
})

const intersectedTocId = ref(null);
const observer = ref(null)

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
    <v-container v-if="blogPost" class="main-container w-66">
        <a id="top"></a>
        <ArticleHeader :meta="meta" />
        <v-divider class="mt-4 mb-6" color="base"></v-divider>
        <ArticleBody class="poppins my-4 main-background">
            <ContentDoc />
        </ArticleBody>
        <v-divider class="my-0" color="base"></v-divider>
        <a id="comment-section"></a>
        <GiscusComment class="my-5" />
        <a id="bottom"></a>
    </v-container>
    <Toc :links="blogPost.body.toc.links" :current-id="intersectedTocId" />
</template>

<style>
/* @media screen and (max-width: 1200px) {
    .toc {
        display: none !important;
    }
} */

.poppins {
    font-family: "Poppins", sans-serif;
}
</style>