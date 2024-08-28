<script setup>
import { computed, ref, watch } from 'vue';

import Fuse from 'fuse.js';


const searchTerm = ref('')
const isProcessing = ref(false);
// const searchResults = ref(null);

const { data: searchResults, status, error, refresh } = await useAsyncData(
  'index-search',
  () => {
    if (searchTerm.value === '') return null;
    return searchContent(searchTerm.value)
  }
);

const { data: fetchPosts } = await useAsyncData('fetch-content', () => {
  return queryContent('/')
    .where({ status: 'published' })
    .only(['title', 'author', 'category', 'description', 'tags', 'plainContent', '_id', '_path', '_dir']).find()
})

console.log('fetched posts:::', fetchPosts.value)

async function fuseSearch(keyword) {
  if (keyword === '') return null;
  const options = {
    isCaseSensitive: false,
    includeMatches: true,
    minMatchCharLength: 2,
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['title', 'description', 'plainContent'],

    // fuzzy
    threshold: 0.6, // default
  }

  const fuse = new Fuse(fetchPosts.value, options)

  const result = await fuse.search(keyword)
  return result
}

watch(searchTerm, async (newTerm) => {
  const results = await fuseSearch(newTerm);
  console.log('fuse results', results)
})
// const options = {
//   includeScore: true,
//   // Search in `author` and in `tags` array
//   keys: ['author', 'tags']
// }
// const fuse = new Fuse(list, options)
// const result = fuse.search('tion')

const showResults = computed(() => {
  console.log('res', searchResults.value)
  if (searchResults.value)
    return true;
  else
    return false;
})

</script>
<template>
  <v-dialog max-width="50vw">
    <template v-slot:activator="{ props: activatorProps }">
      <!-- <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn> -->
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
            @update:modelValue="refresh" clearable density="compact" hide-details="true" class="pt-0">
            <template v-slot:prepend>
              <v-icon color="primary" icon="fa-solid fa-magnifying-glass"></v-icon>
            </template>
          </v-text-field>
        </v-list-item>
        <v-divider class="my-0" color="baseColor"></v-divider>
        <v-card-text class="overflow-y-auto fill-height">
          <pre v-if="showResults">{{ searchResults }}</pre>
          <div v-else class="d-flex flex-column fill-height justify-center align-center">
            <p>search something you like</p>
            <p><v-icon color="primary" icon="fa-regular fa-face-smile-wink" size="x-large"></v-icon></p>
          </div>


        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
  <!-- <v-card>
    <v-list-item class="px-4">
      <v-text-field v-model="search" label="Search" base-color="baseColor" color="primary" variant="plain"
        @update:modelValue="searchApp">
        <template v-slot:prepend>
          <v-icon color="primary" icon="fa-solid fa-magnifying-glass"></v-icon>
        </template>
      </v-text-field>
    </v-list-item>
    <v-divider class="my-0" color="baseColor"></v-divider>
    <v-card-text>
      <pre v-if="searchResults">{{ searchResults }}</pre>
    </v-card-text>
  </v-card> -->
</template>



<style></style>