<script setup>
import Card from '@/components/project/ProjectCard.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: false,
    default: []
  }
})
</script>

<template>
  <div v-for="project in projects" :key="project._path">
    <Card class="my-4" :project="project"></Card>
  </div>
</template>



<style></style>