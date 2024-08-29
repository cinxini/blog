<script setup>
import { computed, ref, watch } from 'vue';

import Fuse from 'fuse.js';


const searchTerm = ref('')
const isProcessing = ref(false);
// const searchResults = ref(null);

const { data: fetchPosts } = await useAsyncData('fetch-content', () => {
  return queryContent('/')
    .where({ status: 'published', pageType: { $ne: 'info' } })
    .only(['_id', 'mdContent', 'pageType', 'title', 'author', 'category', 'description', 'tags', 'plainContent', '_id', '_path', '_dir']).find()
})

console.log('fetched posts:::', fetchPosts.value)
// const fetchChildLinks = async (links) => {
//   let newChildLinks = []
//   await links.forEach(async (link) => {
//     // console.log(link)
//     const newItem = { id: link.id, text: link.text }
//     console.log(newItem)
//     newChildLinks.push(newItem)
//     if (link.children) {
//       console.log('has child')
//       const childLinks = await fetchChildLinks(link.children)
//       newChildLinks.push(...childLinks)
//     }
//   })
//   console.log('final links before return ', newChildLinks)
//   return newChildLinks;
// }
// const linksObjToArray = async (post) => {
//   return await fetchChildLinks(post.body.toc.links)
// }

// const childrenLinks = await linksObjToArray(fetchPosts.value[0])
// console.log('links', childrenLinks)

// childrenLinks.forEach(link => {
//   console.log(link)
//   const post = fetchPosts.value[0];
//   console.log(link.text, post.plainContent.split(link.text))
// })

// linksObjToArray(fetchPosts.value[0])
async function fuseSearch(keyword) {
  if (keyword === '') return null;
  const options = {
    isCaseSensitive: false,
    includeMatches: true,
    minMatchCharLength: 2,
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['title', 'description', 'mdContent'],

    // fuzzy
    threshold: 0.6, // default
  }

  const fuse = new Fuse(fetchPosts.value, options)

  const result = await fuse.search(keyword)
  return result
}

const { data: searchResults, status, error, refresh } = await useAsyncData(
  'index-search',
  () => {
    if (searchTerm.value === '') return null;
    return fuseSearch(searchTerm.value)
  }
);

watch(searchTerm, async (newTerm) => {
  refresh();
  console.log('fuse results', searchResults.value)
})

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

          <div v-if="showResults" class="fill-height">
            <div v-if="searchResults.length > 0" class="fill-height">
              <v-card v-for="post in searchResults" class="mb-4">
                <v-card-title>
                  <p>{{ post.item.pageType }}: {{ post.item.title }}</p>
                  <!-- <pre>{{ post.item.body.toc.links }}</pre> -->
                </v-card-title>
                <div class="d-flex flex-column">
                  <v-list-item v-for="match in post.matches">
                    <pre>{{ match }}</pre>
                  </v-list-item>
                </div>
                <!-- <pre>{{ post }}</pre> -->
              </v-card>
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