<script setup>
import FeaturedCard from '@/components/containers/FeaturedCard.vue';
import LatestCard from '@/components/containers/LatestCard.vue';
import SectionTitle from '@/components/items/SectionTitle.vue';
import c from '@/constants/index';
import { onMounted, ref } from 'vue';

// feature
const numFeaturedPages = ref(1);
const numFeaturedPerPages = ref(c.FEATURED_PER_PAGE);

// const fetchFeatured = async () => {
//   const data = await queryContent('/')
//     .where({ isFeatured: true })
//     .limit(c.MAX_FEATURED)
//     .sort({ 'dates.published': -1 })
//     .find()
//   return data;
// }

const { data: featuredPosts, refresh: refreshFetchFeatures } = useAsyncData('featuredList', () => {
  return queryContent('/')
    .where({ isFeatured: true, status: 'published' })
    .limit(c.MAX_FEATURED)
    .sort({ 'dates.published': -1 })
    .find();
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

const { data: latestProjects, refresh: refreshFetchProjects } = useAsyncData('latestProjectList', () => {
  return queryContent('/project')
    .where({ status: 'published' })
    .limit(c.NUM_LATEST)
    .sort({ 'dates.published': -1 })
    .find();
})

const { data: latestBlogs, refresh: refreshFetchBlogs } = useAsyncData('latestBlogList', () => {
  return queryContent('/blog')
    .where({ status: 'published' })
    .limit(c.NUM_LATEST)
    .sort({ 'dates.published': -1 })
    .find();
})

onMounted(async () => {
  if (!featuredPosts.value) {
    await refreshFetchFeatures();
  }
  numFeaturedPages.value = Math.ceil(featuredPosts.value.length / c.FEATURED_PER_PAGE);

  if (!latestProjects.value) {
    await refreshFetchProjects();
  }

  if (!latestBlogs.value) {
    await refreshFetchBlogs();
  }
})

</script>

<template>
  <v-container class="main-container w-66">
    <div class="mb-10">
      <SectionTitle :tooltip="`${c.MAX_FEATURED} latest featured articles`" title="Features"
        icon="fa-solid fa-map-pin" />
      <v-carousel v-if="featuredPosts" class="my-4" height="290" width="100%" show-arrows="hover" cycle hide-delimiters>
        <v-carousel-item v-for="iPage in numFeaturedPages" :key="iPage">
          <div class="d-flex flex-row justify-space-between ga-5">
            <FeaturedCard v-for="post in iPagePosts(iPage)" :key="post._path" :content="post" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="mb-10">
      <SectionTitle :tooltip="`${c.NUM_LATEST} latest projects`" title="Latest Projects" icon="fa-solid fa-code" />
      <div class="d-flex justify-space-between flex-wrap ga-2  mt-4 mb-2">
        <LatestCard v-for="content in latestProjects" :key="content._path" :content="content" />
      </div>
      <div style="height: 30px;" class="d-flex flex-row-reverse">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn v-bind="props" :variant="isHovering ? 'tonal' : 'flat'" :color="isHovering ? 'primary' : 'baseColor'"
              class="mybutton" density="comfortable" to="/projects" width="210">
              <span>See more projects</span>
              <template v-slot:append>
                <v-icon icon="fa-solid fa-arrow-right-long"></v-icon>
              </template>
            </v-btn>
          </template>
        </v-hover>
      </div>
    </div>

    <div class="mb-10">
      <SectionTitle :tooltip="`${c.NUM_LATEST} latest blog posts`" title="Latest Blog Posts"
        icon="fa-solid fa-quote-left" />
      <div class="d-flex justify-space-between flex-wrap ga-2  mt-4 mb-2">
        <LatestCard v-for="content in latestBlogs" :key="content._path" :content="content" />
      </div>
      <div style="height: 30px;" class="d-flex flex-row-reverse">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn v-bind="props" :variant="isHovering ? 'tonal' : 'flat'" :color="isHovering ? 'primary' : 'baseColor'"
              class="mybutton" density="comfortable" to="/blogs" width="210">
              <span>See more posts</span>
              <template v-slot:append>
                <v-icon icon="fa-solid fa-arrow-right-long"></v-icon>
              </template>
            </v-btn>
          </template>
        </v-hover>
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