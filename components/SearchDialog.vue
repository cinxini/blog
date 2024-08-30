<script setup>
import SearchPostItem from '@/components/items/SearchPostItem.vue';
import Fuse from 'fuse.js';
import { computed, ref, watch } from 'vue';

const searchTerm = ref('')


const { data: fetchPosts } = await useAsyncData('fetch-content', () => {
  return queryContent('/')
    .where({ status: 'published', pageType: { $ne: 'info' } })
    .only(['sections', 'pageType', 'title', 'author', 'category', 'description', 'tags', '_id', '_path', '_dir']).find()
})


async function fuseSearch(keyword) {
  const options = {
    isCaseSensitive: false,
    includeMatches: true,
    minMatchCharLength: 2,
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['title', 'description', 'sections.content', 'author'],
    // fuzzy
    threshold: 0.5, // default
  }

  const fuse = new Fuse(fetchPosts.value, options)

  const result = await fuse.search(keyword)
  const filteredResult = result.filter((item) => item.score < 0.7);
  return filteredResult;
}

const { data: searchResults, status, error, refresh } = await useAsyncData(
  'index-search',
  () => {
    if (!searchTerm.value) return [];
    if (searchTerm.value === '') return [];
    return fuseSearch(searchTerm.value)
  }
);

watch(searchTerm, async (newTerm) => {
  updateSearch()
})

const showResults = computed(() => {
  if (searchResults.value)
    return true;
  else
    return false;
})

const onClear = () => {

}

const updateSearch = () => {
  refresh();
}

</script>
<template>
  <v-dialog max-width="50vw">
    <template v-slot:activator="{ props: activatorProps }">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-btn v-bind="{ ...activatorProps, ...props }" class="ma-2 pa-0" icon="fa-solid fa-magnifying-glass"
            size="small" :color="isHovering ? 'primary' : 'baseColor'"></v-btn>
        </template>
      </v-hover>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card height="70vh">
        <v-list-item class="px-4 pt-3 pb-4">
          <v-text-field v-model="searchTerm" base-color="baseColor" color="primary" variant="plain" placeholder="search"
            clearable density="compact" hide-details="true" class="pt-0" @click:clear="onClear">
            <template v-slot:prepend>
              <v-icon color="primary" icon="fa-solid fa-magnifying-glass"></v-icon>
            </template>
          </v-text-field>
        </v-list-item>
        <v-divider class="my-0" color="baseColor"></v-divider>
        <v-card-text class="overflow-y-auto fill-height">

          <div v-if="showResults" class="fill-height">
            <div v-if="searchResults.length > 0" class="fill-height">
              <SearchPostItem v-for="post in searchResults" :key="post.item._path" :post="post" />
            </div>
            <div v-else class="d-flex flex-column fill-height justify-center align-center ga-3">
              <p>cannot find any posts</p>
              <p><v-icon color="primary" icon="fa-regular fa-face-sad-cry" size="x-large"></v-icon></p>
            </div>
          </div>
          <div v-else class="d-flex flex-column fill-height justify-center align-center ga-3">
            <p>search something you like</p>
            <p><v-icon color="primary" icon="fa-regular fa-face-smile-wink" size="x-large"></v-icon></p>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>



<style scoped>
.bold {
  font-weight: bold;
  color: red;
}
</style>