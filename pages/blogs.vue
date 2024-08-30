<script setup>
import BlogPostList from '@/components/ContentList.vue';
import DotLoader from '@/components/items/DotLoader.vue';
import c from '@/constants/posts';
import { computed, onMounted, ref, watch } from 'vue';

const isFetching = ref(false);
const currPage = ref(1);
const count = ref(0);

const numPages = computed(() => {
  if (count.value === 0) return 1;
  return Math.ceil(count.value / c.POSTS_PER_PAGE);
})

const fetchBlogPosts = async (pageNo) => {
  isFetching.value = true;
  let data = null;
  try {
    data = await queryContent('/blog').where({ status: 'published' }).sort({ 'dates.published': -1 }).skip((pageNo - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find()
  } catch (error) {
    console.log('Error:', error);
  } finally {
    isFetching.value = false;
  }
  return data;
}

const { data: blogPosts, refresh } = await useAsyncData('blogPostList', () => {
  return fetchBlogPosts(currPage.value);
})

const showList = computed(() => {
  if (blogPosts.value && blogPosts.value.length > 0)
    return true;
  else
    return false;
})

onMounted(async () => {
  if (!blogPosts.value) {
    refresh();
  }
  count.value = await queryContent('/blog').where({ status: 'published' }).count();
})

watch(currPage, async (newPageNo) => {
  refresh();
})

</script>

<template>
  <v-container class="main-container w-66">
    <p class="text-center text-h5">Recent Blog Posts</p>
    <div v-if="isFetching" class="d-flex flex-row justify-center ma-16">
      <DotLoader />
    </div>
    <div v-else>
      <div v-if="showList">
        <BlogPostList :articles="blogPosts" />
        <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
          prev-icon="fa-solid fa-caret-left" rounded="lg" color="grey" active-color="primary"></v-pagination>
      </div>
      <p v-else class="text-center">No blog posts.</p>
    </div>
  </v-container>
</template>

<style></style>