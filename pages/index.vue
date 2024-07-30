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
  return (((iPage-1) * numFeaturedPerPages.value) + iCard -1);
}
const showFeatured = (iPage, iCard) => {
  return featuredPostIdx(iPage, iCard) < totalFeaturePosts.value? true : false
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
        <div v-for="iCard in numFeaturedPerPages" :key="iCard">
          <FeaturedCard v-if="showFeatured(iPage, iCard)" :content="featuredPosts[featuredPostIdx(iPage, iCard)]" />
        </div>
        
      </div>
      </v-carousel-item>
    </v-carousel>

  </v-container>
  
</template>



<style>

</style>