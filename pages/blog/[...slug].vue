<script setup>
import ArticleBody from '@/components/blog/ArticleBody.vue';
import ArticleHeader from '@/components/blog/ArticleHeader.vue';
import ArticleToc from '@/components/blog/ArticleToc.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})

const meta = computed(() => {
    if (blogPost) {
        return {
            title: blogPost.value.title,
            author: blogPost.value.author,
            category: blogPost.value.category,
            date: date.format(blogPost.value.dates.published, 'fullDate'),
            description: blogPost.value.description,
            tags: blogPost.value.tags
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

    document.querySelectorAll('.content h2[id], .content h3[id]').forEach((section) => {
        observer.value?.observe(section)
    })
})
onUnmounted(() => {
    observer.value?.disconnect()
})
</script>

<template>
    <v-container v-if="blogPost" style=" max-width: 900px; min-width: 400px;" class="main-background">
        <ArticleHeader :meta="meta"></ArticleHeader>
        <v-divider class="mt-4 mb-6" color="secondary"></v-divider>
        <ArticleBody class="poppins my-4 main-background">
            <!-- <ContentDoc ref="md" /> -->
            <ContentDoc />

        </ArticleBody>
    </v-container>
    <ArticleToc :links="blogPost.body.toc.links" :current-id="intersectedTocId" />
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