<script  setup>
import ArticleCard from '@/components/blog/ArticleCard.vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';
const date = useDate()
const router = useRouter();

const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/post').sort({ 'dates.published' : -1 }).find();
})  
console.log(blogPostList)

const count = await queryContent('/post').count();

console.log('count', count)
</script>

<template>
  <v-container style=" max-width: 800px; min-width: 400px;">
    <div >
    <p class="text-center text-h5 poppins-regular">Recent Posts</p>
    <div  v-for="blogPost in blogPostList" :key="blogPost._path">
      <ArticleCard :article="blogPost" class="my-4"></ArticleCard>
    </div>
  </div>
  </v-container>
  

  
  
</template>



<style>

</style>