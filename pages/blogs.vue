<script setup>
import FilterSidebar from '@/components/blog/BlogFilterSidebar.vue';
import BlogPostList from '@/components/blog/BlogPostList.vue';
import c from '@/constants/blog';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';

const date = useDate()
const router = useRouter();

const page = ref(1);
const { data: blogPosts } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').sort({ 'dates.published': -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find();
})

const count = await queryContent('/blog').count();

const numPages = computed(() => {
  return Math.ceil(count / c.POSTS_PER_PAGE);
})


watch(page, async (newPage, prevPage) => {
  // const data = await queryContent('/post').sort({ 'dates.published' : -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find();
  const data = await queryContent('/blog').sort({ 'dates.published': -1 }).skip((newPage - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find()
  blogPosts.value = data;
  console.log('page', newPage, data)
})

</script>

<template>
  <FilterSidebar></FilterSidebar>
  <v-container style=" max-width: 900px; min-width: 400px;">
    <div v-if="blogPosts">
      <p class="text-center text-h5 poppins-regular">Recent Posts</p>
      <BlogPostList :blog-posts="blogPosts" />
      <v-pagination :length="numPages" v-model="page" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg"></v-pagination>
    </div>
  </v-container>

</template>



<style></style>