<script setup>
import DotLoader from '@/components/items/DotLoader.vue';
import PageSelector from '@/components/selectors/PageTypeSelector.vue';
import c from '@/constants/posts';
import { onMounted, ref, watch } from 'vue';

const { path, query, params } = useRoute();
const pageType = ref('all');
const tags = ref(params.slug);
console.log(params.slug[0])

const isFetching = ref(false);
const currPage = ref(1);

const findPostsWithTags = async (tagList, currPage) => {
  isFetching.value = true;

  let data = null;
  try {
    data = await queryContent(`/${pageType.value === 'all' ? '' : pageType.value}`)
      .where({
        tags: { $contains: tagList }
      })
      .sort({ 'dates.published': -1 })
      .skip((currPage - 1) * c.POSTS_PER_PAGE)
      .limit(c.POSTS_PER_PAGE)
      .find();
  } catch (error) {
    console.log('Error:', error)
  } finally {
    isFetching.value = false
  }
  return data
}

const { data: posts } = await useAsyncData(`tag-${path}`, () => {
  return findPostsWithTags(tags.value, currPage.value);
})

const count = ref(0);
const numPages = computed(() => {
  if (count.value === 0) return 1;
  return Math.ceil(count.value / c.POSTS_PER_PAGE);
})

onMounted(async () => {
  if (!posts.value) {
    posts.value = await findPostsWithTags(tags.value, currPage.value);
  }
  count.value = await queryContent(`/${pageType.value === 'all' ? '' : pageType.value}`).where({ tags: { $contains: tags.value } }).count();
  console.log('count', count.value)
})

watch(pageType, async (newPage) => {
  currPage.value = 1;
  posts.value = await findPostsWithTags(tags.value, currPage.value);
  count.value = await queryContent(`/${newPage === 'all' ? '' : newPage}`).where({ tags: { $contains: tags.value } }).count();
})

watch(currPage, async (newPageNo) => {
  posts.value = await findPostsWithTags(tags.value, newPageNo);
})
</script>

<template>
  <v-container class="main-container w-66">
    <p class="text-center text-h5"> Posted in tag <span class="text-primary">{{ tags[0] }}</span></p>

    <PageSelector v-model="pageType" />
    <div v-if="isFetching" class="d-flex flex-row justify-center ma-16">
      <DotLoader />
    </div>
    <p v-if="count > 0" class="text-center">Found {{ count }} posts.</p>
    <p v-else class="text-center">No posts with tag <span class="text-primary">{{ tags[0] }}</span>.</p>
    <div v-if="posts.length > 0">

      <ContentList :articles="posts" />
      <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg" color="grey" active-color="primary"></v-pagination>
    </div>

  </v-container>
</template>



<style></style>