<script setup>
import Card from '@/components/containers/ContentCard.vue';

const props = defineProps({
  articles: {
    type: Array,
    required: false,
    default: []
  }
})
</script>

<template>
  <div v-for="article in articles" :key="article._path">
    <Card class="my-4" :content="article"></Card>
  </div>
</template>



<style></style>