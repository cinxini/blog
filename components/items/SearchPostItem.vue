<template>
  <v-card class="mb-4" variant="plain">
    <v-card-title class="search-result-title">
      <v-icon v-if="post.item.pageType === 'blog'" icon="fa-solid fa-quote-right" size="x-small" start />
      <v-icon v-else icon="fa-solid fa-code" size="x-small" start />
      {{ post.item.title }}
    </v-card-title>
    <div class="d-flex flex-column">
      <SearchMatchItem v-for="match, matchIdx in post.matches" :key="`${post.item._path}-${match.key}-${matchIdx}`"
        :match="match" :match-id="`${post.item.path}-${match.key}-${matchIdx}`"
        :content="match.key === 'sections.content' ? post.item.sections[match.refIndex] : null"
        :path="post.item._path" />
    </div>
  </v-card>
</template>

<script setup>
import SearchMatchItem from '@/components/items/SearchMatchItem.vue';

const props = defineProps({
  post: Object
})
</script>

<style scoped>
.search-result-title {
  /* background-color: aliceblue; */
}
</style>