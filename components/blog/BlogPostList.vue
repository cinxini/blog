<script setup>
import ArticleCard from '@/components/blog/ArticleCard.vue';

const props = defineProps({
  blogPosts: {
    type: Array,
    required: false,
    default: []
  }
})
</script>

<template>
  <div v-for="blogPost in blogPosts" :key="blogPost._path">
    <ArticleCard :article="blogPost" class="my-4"></ArticleCard>
  </div>
</template>



<style></style>