
<script  setup>
import BlogPostList from '@/components/blog/BlogPostList.vue';
import c from '@/constants/blog';
import { computed, ref } from 'vue';

const { params, path } = useRoute();

const page = ref(1);
const tags = ref(params.slug);

const findPostsWithTags = (tagList, currPage) => {
  return queryContent('/blog')
    .where({
      tags: { $contains: tagList }
    })
    .sort({ 'dates.published': -1 })
    .skip((currPage - 1) * c.POSTS_PER_PAGE)
    .limit(c.POSTS_PER_PAGE)
    .find();
}

const { data: blogPosts } = await useAsyncData(`content-${path}`, () => {
    return findPostsWithTags(tags.value, page.value);
})

watch(page, async (newPage, prevPage) => {
  // const data = await queryContent('/post').sort({ 'dates.published' : -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find();
  const data = await findPostsWithTags(tags.value, newPage)
  blogPosts.value = data;
})

const count = await queryContent('/blog').where({ tags: {$contains: tags.value }}).count();

const numPages = computed(() => {
  return Math.ceil(count / c.POSTS_PER_PAGE);
})
</script>

<template>
  <v-container style=" max-width: 900px; min-width: 400px;">
    <p class="text-center text-h5 poppins-regular">{{ count }} Posts with #{{ tags[0] }}</p>
    <div v-if="blogPosts">
      <BlogPostList :blog-posts="blogPosts" />
      <v-pagination :length="numPages" v-model="page" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg"></v-pagination>
    </div>
  </v-container>
</template>


<style></style>