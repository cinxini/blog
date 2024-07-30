<script  setup>
import FeaturedCard from '@/components/containers/FeaturedCard.vue';
import c from '@/constants/index';
import { computed, onMounted, ref } from 'vue';

const numFeaturedPages = ref(1);
const numFeaturedPerPages = ref(c.FEATURED_PER_PAGE);
const colors = ref([
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
])
const slides = ref([
          'First',
          'Second',
          'Third',
        ])

const fetchFeatured = async () => {
  const data = await queryContent('/blog')
    .where({ isFeatured: true })
    .sort({ 'dates.published': -1 })
    .find()
  return data;
}

const { data: featuredPosts } = useAsyncData('featuredList', () => {
  return fetchFeatured();
})

const totalFeaturePosts = computed(() => {
  if (featuredPosts.value)
    return featuredPosts.value.length
  else
    return null
})
const featuredPostIdx = (iPage, iCard) =>{
  return (((iPage-1) * numFeaturedPerPages.value) + iCard);
}
const showFeatured = (iPage, iCard) => {
  return featuredPostIdx(iPage, iCard) < totalFeaturePosts.value? true : false
}

const iPagePosts = (iPage) => {
  const startIdx = featuredPostIdx(iPage, 0)
  return featuredPosts.value?.slice(startIdx, startIdx + numFeaturedPerPages.value)
}
onMounted(async () => {
  if(!featuredPosts.value){
    featuredPosts.value = await fetchFeatured();
  }
  console.log(featuredPosts.value)
  numFeaturedPages.value = Math.ceil(featuredPosts.value.length / c.FEATURED_PER_PAGE);
  console.log(featuredPosts.value.length, c.FEATURED_PER_PAGE, numFeaturedPages.value)

})
</script>

<template>
  <v-container class="main-container" >
    <div class="mb-10"> 
      <p class="text-center text-h5 poppins-regular">Featured</p>
      <v-carousel
        v-if="featuredPosts"
        class="my-4"
        height="250"
        width="100%"
        show-arrows="hover"
        cycle
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="iPage in numFeaturedPages"
          :key="iPage"
        >
        <div class="d-flex flex-row justify-center ga-5">
          <FeaturedCard v-for="post in iPagePosts(iPage)" :key="post._path" :content="post"/>
        </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="mb-10">
      <p class="text-center text-h5 poppins-regular">Latest</p>

    </div>
    

  </v-container>
  
</template>



<style>

</style>