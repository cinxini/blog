<script setup>
import FeaturedCard from '@/components/containers/FeaturedCard.vue';
import c from '@/constants/index';
import { onMounted, ref } from 'vue';

// feature
const numFeaturedPages = ref(1);
const numFeaturedPerPages = ref(c.FEATURED_PER_PAGE);

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

const { data: latestPosts } = useAsyncData('featuredList', () => {
  return fetchLatest();
})

onMounted(async () => {
  if (!featuredPosts.value) {
    featuredPosts.value = await fetchFeatured();
  }
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
      <v-carousel v-if="featuredPosts" class="my-4" height="250" width="100%" show-arrows="hover" cycle
        hide-delimiter-background>
        <v-carousel-item v-for="iPage in numFeaturedPages" :key="iPage">
          <div class="d-flex flex-row justify-space-between ga-5">
            <FeaturedCard v-for="post in iPagePosts(iPage)" :key="post._path" :content="post" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="mb-10">
      <p class="text-center text-h5 poppins-regular ">Latest Posts</p>
      <div class="my-4 d-flex justify-space-between flex-wrap ga-5">
        <v-card v-for="content in latestPosts" :key="content._path" width="48%" height="120" riant="flat"
          color="transparent">
          <v-row no-gutters style="height: 100%;">
            <v-col cols="3" class="position-relative">
              <v-img src="public/images/project/default.png" cover height="100%" />
            </v-col>
            <v-col class="d-flex flex-column pa-3">
              <div class="text-subtitle-1">{{ content.title }}</div>
              <div class="text-caption">
                {{ content.description.substring(0, c.DESCRIPTION_MAX_CHAR) }}{{ content.description.length > c.DESCRIPTION_MAX_CHAR ? '...' : '' }}
              </div>

              <div class="d-flex flex-row ga-1 align-center">
                <v-icon icon="fa-solid fa-tag" size="small" color="secondary" />
                <v-chip v-for="tag in content.tags" :key="tag" :ripple="false" link size="small" density="compact"
                  rounded="sm"> {{ tag }}</v-chip>
              </div>

            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>


  </v-container>

</template>



<style scoped>
v-chip {
  background-color: red;
}
</style>