<script setup>
import FeaturedCard from '@/components/containers/FeaturedCard.vue';
import LatestCard from '@/components/containers/LatestCard.vue';
import c from '@/constants/index';
import { onMounted, ref } from 'vue';

// feature
const numFeaturedPages = ref(1);
const numFeaturedPerPages = ref(c.FEATURED_PER_PAGE);

const fetchFeatured = async () => {
  const data = await queryContent('/')
    .where({ isFeatured: true })
    .limit(c.MAX_FEATURED)
    .sort({ 'dates.published': -1 })
    .find()
  return data;
}

const { data: featuredPosts } = useAsyncData('featuredList', () => {
  return fetchFeatured();
})

const featuredPostIdx = (iPage, iCard) => {
  return (((iPage - 1) * numFeaturedPerPages.value) + iCard);
}

const iPagePosts = (iPage) => {
  const startIdx = featuredPostIdx(iPage, 0)
  return featuredPosts.value?.slice(startIdx, startIdx + numFeaturedPerPages.value)
}

// latest

const fetchLatest = async () => {
  const data = await queryContent('/')
    .where({ status: 'published' })
    .limit(c.NUM_LATEST)
    .sort({ 'dates.published': -1 })
    .find()
  return data;
}

const { data: latestPosts } = useAsyncData('latestList', () => {
  return fetchLatest();
})

onMounted(async () => {
  if (!featuredPosts.value) {
    featuredPosts.value = await fetchFeatured();
  }
  console.log('feat', featuredPosts.value)
  numFeaturedPages.value = Math.ceil(featuredPosts.value.length / c.FEATURED_PER_PAGE);

  if (!latestPosts.value) {
    latestPosts.value = await fetchLatest();
  }
  console.log(latestPosts.value)

})

</script>

<template>
  <v-container class="main-container">
    <div class="mb-10">
      <p class="text-center text-h5 poppins-regular">Featured</p>
      <v-carousel v-if="featuredPosts" class="my-4" height="290" width="100%" show-arrows="hover" cycle hide-delimiters>
        <v-carousel-item v-for="iPage in numFeaturedPages" :key="iPage">
          <div class="d-flex flex-row justify-space-between ga-5">
            <FeaturedCard v-for="post in iPagePosts(iPage)" :key="post._path" :content="post" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="mb-10">
      <p class="text-center text-h5 poppins-regular ">Latest Posts</p>
      <div class="my-4 d-flex justify-space-between flex-wrap ga-2">
        <LatestCard v-for="content in latestPosts" :content="content" />

      </div>
    </div>


  </v-container>

</template>



<style scoped>
.latest-title a {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.2em;
}


.latest-title a:hover {
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 4px;
  color: rgb(var(--v-theme-primary))
}

.mytag {
  color: rgb(var(--v-base-color));
}

.categoryChip {
  color: rgb(var(--v-base-color));
}
</style>