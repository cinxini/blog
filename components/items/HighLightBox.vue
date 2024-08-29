<template>
  <p class="match-content">
    <span>{{ firstIndex !== 0 ? '...' : '' }}{{ match.value.slice(firstIndex, firstIndices[0]) }}</span>
    <span class="hlbox-bold">{{ match.value.slice(firstIndices[0], firstIndices[1] + 1) }}</span>
    <span>{{ match.value.slice(firstIndices[1] + 1, lastIndex) }}{{ lastIndex < match.value.length ? '...' : '' }}</span>
  </p>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  match: Object,
  matchId: String
})

const firstIndices = computed(() => {
  return props.match.indices[0];
})

const limit = 50;
const firstIndex = computed(() => {
  if (firstIndices.value[0] >= limit) {
    return firstIndices.value[0] - 10;
  } else {
    return 0;
  }
})

const lastIndex = computed(() => {
  if (firstIndex.value !== 0) return firstIndex.value + limit;
  if (props.match.value.length > limit) return limit;
  return props.match.value.length;
})

</script>

<style>
.hlbox-bold {
  /* font-weight: bold; */
  /* color: rgb(var(--v-theme-secondary)); */
  color: rgb(var(--v-theme-baseVariant));
  background-color: rgba(var(--v-theme-primary), 0.15);
}

p.match-content {
  color: rgb(var(--v-theme-base));
  font-size: 0.8em;
}
</style>