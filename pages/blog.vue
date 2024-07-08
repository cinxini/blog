<script  setup>
import ArticleCard from '@/components/blog/ArticleCard.vue';
import FlexBox from '@/components/containers/FlexBox.vue';
import c from '@/constants/blog';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';

const date = useDate()
const router = useRouter();

const page = ref(1);
const { data: blogPosts } = useAsyncData('blogPostList', () => {
    return queryContent('/post').sort({ 'dates.published' : -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find();
  })  


const count = await queryContent('/post').count();

const numPages = computed(() => {
  return Math.ceil(count / c.POSTS_PER_PAGE);
})


watch(page, async (newPage, prevPage) => {
  // const data = await queryContent('/post').sort({ 'dates.published' : -1 }).skip((page.value - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find();
  const data = await queryContent('/post').sort({ 'dates.published' : -1 }).skip((newPage - 1) * c.POSTS_PER_PAGE).limit(c.POSTS_PER_PAGE).find()
  blogPosts.value = data;
  console.log('page', newPage, data)
})

console.log('init blog posts', blogPosts)

const allTags = await queryContent('/post').only(['tags']).find()
const tagCount = {};
allTags.forEach(tags => {
  tags.tags.forEach(tag => {
    if(tagCount[tag]) 
      tagCount[tag]++; 
    else 
      tagCount[tag] = 1;
  })
})

console.log(Object.entries(tagCount).sort((a, b) => { 
  return  (a[1] > b[1] ? -1 : 1);
}))
</script>

<template>
  <v-navigation-drawer
      permanent
      app
      floating
      width="250" 
      style="position:fixed; top:0; left:10; overflow-y: auto; "
      variant="plain"
      class="main-background"
  >
    <div style="padding-top: 50px; text-align: left;">  
      <v-list-item>
        <v-list-item-title>Category</v-list-item-title>
        <v-list-item-subtitle>
          <FlexBox style="flex-wrap: wrap;">
            <v-chip label variant="outlined" density="comfortable" size="small" color="secondary-lighten-3">all</v-chip>
            <v-chip label variant="outlined" density="comfortable" size="small" color="secondary-lighten-3">datasci</v-chip>
            <v-chip label variant="outlined" density="comfortable" size="small" color="secondary-lighten-3">webdev</v-chip>
            <v-chip label variant="outlined" density="comfortable" size="small" color="secondary-lighten-3">others</v-chip>
          </FlexBox>
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Tags</v-list-item-title>
        <v-list-item-subtitle>
          <FlexBox style="flex-wrap: wrap;"></FlexBox>
        </v-list-item-subtitle>
      </v-list-item>
    </div>
  
  </v-navigation-drawer>
  <v-container style=" max-width: 800px; min-width: 400px;">
    <div v-if="blogPosts">
      <p class="text-center text-h5 poppins-regular">Recent Posts</p>
      <div  v-for="blogPost in blogPosts" :key="blogPost._path">
        <ArticleCard :article="blogPost" class="my-4"></ArticleCard>
      </div>
      <v-pagination :length="numPages"
        v-model="page"
        next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left"
        rounded="lg"
      ></v-pagination>
  </div>
  </v-container>

</template>



<style>

</style>