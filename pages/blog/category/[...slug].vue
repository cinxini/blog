<script setup>
import BlogPostList from '@/components/blog/BlogPostList.vue';
import c from '@/constants/blog';
import { ref } from 'vue';

const { params, path } = useRoute();
const page = ref(1);
const category = ref(params.slug[0]);

const findPostsWithCategory = (category, currPage) => {
  return queryContent('/blog')
    .where({
      category: category 
    })
    .sort({ 'dates.published': -1 })
    .skip((currPage - 1) * c.POSTS_PER_PAGE)
    .limit(c.POSTS_PER_PAGE)
    .find();
}

const { data: blogPosts } = await useAsyncData(`content-${path}`, () => {
    return findPostsWithCategory(category.value, page.value);
})


const count = await queryContent('/blog').where({ category: category.value }).count();

const numPages = computed(() => {
  return Math.ceil(count / c.POSTS_PER_PAGE);
})
</script>

<template>
  <v-container style=" max-width: 900px; min-width: 400px;">
    <p class="text-center text-h5 poppins-regular">{{ count }} Posts in {{ category }} category</p>
    <div v-if="blogPosts">
      <BlogPostList :blogPosts="blogPosts"></BlogPostList>
      <v-pagination :length="numPages" v-model="page" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg"></v-pagination>
    </div>
    
  </v-container>
</template>

<style></style>