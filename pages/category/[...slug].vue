<script setup>
import DotLoader from '@/components/items/DotLoader.vue';
import c from '@/constants/posts';
import { computed, onMounted } from 'vue';
const { path, query, params } = useRoute();

const isFetching = ref(false);
const currPage = ref(1);

const category = computed(() => {
  if (params.slug.length > 0)
    return params.slug[0]
  else
    return null
})

const pageType = computed(() => {
  if (query.type)
    return query.type;
  else
    return 'all';
})

const findPostsWithCategory = async (category, currPage) => {
  isFetching.value = true;
  let data = null;
  try {
    if (pageType.value === 'all') {
      data = await queryContent(`/`)
        .where({
          category: category
        })
        .sort({ 'dates.published': -1 })
        .skip((currPage - 1) * c.POSTS_PER_PAGE)
        .limit(c.POSTS_PER_PAGE)
        .find();
    } else {
      data = await queryContent(`/${pageType.value}`)
        .where({
          category: category
        })
        .sort({ 'dates.published': -1 })
        .skip((currPage - 1) * c.POSTS_PER_PAGE)
        .limit(c.POSTS_PER_PAGE)
        .find();
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    isFetching.value = false;
  }
  return data;
}
const { data: posts } = await useAsyncData(`category-${path}`, () => {
  return findPostsWithCategory(category.value, currPage.value);
})

const count = await queryContent(`/${pageType.value === 'all' ? '' : pageType.value}`).where({ category: category.value }).count();
const numPages = computed(() => {
  return Math.ceil(count / c.POSTS_PER_PAGE);
})
onMounted(async () => {
  if (!posts.value) {
    posts.value = await findPostsWithCategory(category.value, currPage.value);
  }
  console.log('posts', posts.value.length)
})
</script>

<template>
  <v-container class="main-container w-66">
    <p class="text-center text-h5"> {{ count }} {{ pageType === 'all' ? '' : pageType }} article{{ count > 1 ? 's' : ''
      }}
      founded in <span class="text-primary">{{ category }}</span>
      Category</p>
    <div class="d-flex flex-row justify-center">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip v-bind="props" class="rounded-s-lg" rounded="0"
            :color="isHovering || pageType === 'all' ? 'tertiary' : 'base'"
            :variant="pageType === 'all' ? 'flat' : 'tonal'" size="small" label link :href="path">
            <v-icon icon="fa-solid fa-box-archive" size="small" start />
            all</v-chip>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip v-bind="props" class="rounded-0" :color="isHovering || pageType === 'project' ? 'tertiary' : 'base'"
            :variant="pageType === 'project' ? 'flat' : 'tonal'" size="small" label link
            :href="`/category/${category}?type=project`">
            <v-icon icon="fa-solid fa-code" size="small" start />
            project</v-chip>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip v-bind="props" class="rounded-e-lg redborder" rounded="0"
            :color="isHovering || pageType === 'blog' ? 'tertiary' : 'base'"
            :variant="pageType === 'blog' ? 'flat' : 'tonal'" label link :href="`/category/${category}?type=blog`"
            size="small">
            <v-icon icon="fa-solid fa-quote-right" size="small" start />
            blog
          </v-chip>
        </template>
      </v-hover>
    </div>

    <div v-if="isFetching" class="d-flex flex-row justify-center ma-16">
      <DotLoader />
    </div>

    <div v-if="posts">
      <ContentList :articles="posts" />
      <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg" color="grey" active-color="primary"></v-pagination>
    </div>

  </v-container>
</template>

<style scoped></style>