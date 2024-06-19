<script setup>
import BlogPostHeader from '@/components/blog/BlogPostHeader.vue';
import { computed } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})

const meta = computed(() => {
    if (blogPost){
        return {
            title: blogPost.value.title,
            author: blogPost.value.author,
            date: date.format(blogPost.value.dates.published, 'fullDate'),
            category: blogPost.value.category,
            description: blogPost.value.description,
            tags: blogPost.value.tags
        };
    }else{
        return null;}
})


console.log(blogPost)
</script>

<template>
    <v-container style=" max-width: 800px; min-width: 400px;">
        <v-navigation-drawer
        location="right"
        permanent
      >ee</v-navigation-drawer>
        <v-sheet v-if="meta">
            <BlogPostHeader :meta="meta" />
        </v-sheet>
        <v-sheet>
            <div class="content is-normal">
                <ContentDoc />
            </div>
        </v-sheet>

        
        
    </v-container>
</template>

<style scoped>
</style>