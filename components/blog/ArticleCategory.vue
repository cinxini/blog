<script setup>
import { computed } from 'vue';

const router = useRouter();
const props = defineProps({
  value: {
    type: String,
    required: true
  },
  enableLink: {
    type: Boolean,
    required: false, 
    default: false
  }
})

const linkUrl = computed(() => {
  return `/blog/category/${props.value}`
})

const emits = defineEmits(['select-category']);
</script>

<template>
  <v-chip 
    v-if="enableLink" 
    label 
    variant="outlined" 
    density="comfortable" 
    size="small" 
    class="category is-btn"
    @click.stop="router.push(linkUrl)"
  >
    {{ value }}
  </v-chip>
  <v-chip 
    v-else
    label 
    variant="outlined" 
    density="comfortable" 
    size="small" 
    class="category is-btn"
    @click="emits('select-category', value)"
  >
    {{ value }}
  </v-chip>
</template>



<style scoped>
  .category {
    border-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-secondary));
    border-radius: 5;
    transition: 0.05s ease-in-out;
  }

  .category:hover {
    background-color: rgb(var(--v-theme-secondary));
    color: white;
    display: inline-block;
    line-height: 0.95;
    border-bottom: 2px solid rgba(var(--v-theme-secondary-darken-1), 1);
  }
</style>