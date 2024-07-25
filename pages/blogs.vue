<script setup>
import FilterSidebar from '@/components/blog/BlogFilterSidebar.vue';
import BlogPostList from '@/components/blog/BlogPostList.vue';
import c from '@/constants/blog';
import { ref, watch } from 'vue';

const page = ref(1);
const numPages = ref(1);
const { data: blogPosts } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').sort({ 'dates.published': -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find();
})

let count = await queryContent('/blog').count();
numPages.value = Math.ceil(count / c.POSTS_PER_PAGE);
const filterCondition = ref(null);
// onBeforeMount(async () => {
//   count.value = await queryContent('/blog').count();
// })

const fetchFilteredBlogPosts = async (cond) => {
  let data = null;
  page.value = 1;
  if (cond) {
    data = await queryContent('/blog').where(cond).sort({ 'dates.published': -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find()
    count = await queryContent('/blog').where(cond).count();
  } else {
    data = await queryContent('/blog').sort({ 'dates.published': -1 }).skip((page.vale - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find()
    count = await queryContent('/blog').count();
  }
  numPages.value = Math.ceil(count / c.POSTS_PER_PAGE);
  blogPosts.value = data;
}

watch(page, async (newPage, prevPage) => {
  const data = await queryContent('/blog').sort({ 'dates.published': -1 }).skip((newPage - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find()
  blogPosts.value = data;
})

const filterPostsHandler = async (payload) => {
  console.log(payload)
  filterCondition.value = payload;
}

watch(filterCondition, async (newCond) => {
  console.log('new cond:', newCond)
  fetchFilteredBlogPosts(newCond);
})

</script>

<template>
  <FilterSidebar @filter-posts="filterPostsHandler"></FilterSidebar>
  <v-container style=" max-width: 900px; min-width: 400px;">
    <div v-if="blogPosts.length > 0">
      <p class="text-center text-h5 poppins-regular">Recent Posts</p>
      <BlogPostList :blog-posts="blogPosts" />
      <v-pagination :length="numPages" v-model="page" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg" color="grey" active-color="primary"></v-pagination>
    </div>
    <div v-else>
      <p class="text-center text-h5 poppins-regular">No Posts</p>
    </div>
  </v-container>

</template>

<style></style>