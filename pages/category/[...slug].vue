<script setup>
import DotLoader from '@/components/items/DotLoader.vue';
import PageSelector from '@/components/selectors/PageTypeSelector.vue';
import c from '@/constants/posts';
import { computed, onMounted, watch } from 'vue';
const { path, query, params } = useRoute();

const isFetching = ref(false);
const currPage = ref(1);
const count = ref(null);
const category = computed(() => {
  if (params.slug.length > 0)
    return params.slug[0]
  else
    return null
})

const pageType = ref(query.type ? query.type : 'all');

const findPostsWithCategory = async (category, currPage, type) => {
  isFetching.value = true;
  let data = null;
  try {

    data = await queryContent(`/${type === 'all' ? '' : type}`)
      .where({
        category: category
      })
      .sort({ 'dates.published': -1 })
      .skip((currPage - 1) * c.POSTS_PER_PAGE)
      .limit(c.POSTS_PER_PAGE)
      .find();
  } catch (error) {
    console.log('error', error)
  } finally {
    isFetching.value = false;
  }
  return data;
}
count.value = await queryContent(`/${pageType.value === 'all' ? '' : pageType.value}`).where({ category: category.value }).count();
const { data: posts } = await useAsyncData(`category-${path}`, () => {
  return findPostsWithCategory(category.value, currPage.value, pageType.value);
})

// const count = await queryContent(`/${pageType.value === 'all' ? '' : pageType.value}`).where({ category: category.value }).count();
const numPages = computed(() => {
  if (count.value === 0) return 1;
  return Math.ceil(count.value / c.POSTS_PER_PAGE);
})
onMounted(async () => {
  if (!count.value) count.value = await queryContent(`/${pageType.value === 'all' ? '' : pageType.value}`).where({ category: category.value }).count();
  if (!posts.value) {
    posts.value = await findPostsWithCategory(category.value, currPage.value, pageType.value);
  }
})

watch(pageType, async (newPage) => {
  count.value = await queryContent(`/${newPage === 'all' ? '' : newPage}`).where({ category: category.value }).count();

  currPage.value = 1;
  posts.value = await findPostsWithCategory(category.value, currPage.value, newPage);
})

watch(currPage, async (newPageNo) => {
  posts.value = await findPostsWithCategory(category.value, newPageNo, pageType.value);
})

const showList = computed(() => {
  if (posts.value && posts.value.length > 0)
    return true;
  else
    return false;
})
</script>

<template>
  <v-container class="main-container w-66">
    <p class="text-center text-h5"> Posted in <span class="text-primary">{{ category }}</span>
      Category</p>
    <PageSelector v-model="pageType" />

    <div v-if="isFetching" class="d-flex flex-row justify-center ma-16">
      <DotLoader />
    </div>
    <div v-else>
      <p v-if="count > 0" class="text-center">Found {{ count }} posts.</p>
      <p v-else class="text-center">No posts with category <span class="text-primary">{{ category }}</span>.</p>
      <div v-if="showList">
        <ContentList :articles="posts" />
        <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
          prev-icon="fa-solid fa-caret-left" rounded="lg" color="grey" active-color="primary"></v-pagination>
      </div>

    </div>


  </v-container>
</template>

<style scoped></style>