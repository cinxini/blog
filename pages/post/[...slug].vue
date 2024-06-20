<script setup>
import ArticleBody from '@/components/blog/ArticleBody.vue';
import ArticleHeader from '@/components/blog/ArticleHeader.vue';
import ArticleToc from '@/components/blog/ArticleToc.vue';
import { computed } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})

console.log(blogPost.value.body.toc)

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
</script>

<template>

        
        <v-container v-if="blogPost" style=" max-width: 800px; min-width: 400px;">
            <ArticleHeader :meta="meta"></ArticleHeader>
            <ArticleBody>
                <ContentDoc />
            </ArticleBody>
        </v-container>
        <ArticleToc :links="blogPost.body.toc.links" />
    

</template>

<style >

/* @media screen and (max-width: 1200px) {
    .toc {
        display: none !important;
    }
} */
</style>