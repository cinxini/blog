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
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})

const linkUrl = computed(() => {
  return `/project/category/${props.value}`
})

const emits = defineEmits(['select-category']);
</script>

<template>
  <v-chip v-if="enableLink" label variant="outlined" density="comfortable" size="small" class="category is-btn"
    :class="{ active: active }" @click.stop="router.push(linkUrl)">
    {{ value }}
  </v-chip>
  <v-chip v-else label variant="outlined" density="comfortable" size="small" class="category is-btn"
    :class="{ active: active }" @click="emits('select-category', value)">
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

.category:hover,
.category.active {
  background-color: rgb(var(--v-theme-secondary));
  color: white;
  display: inline-block;
  line-height: 0.95;
  border-bottom: 2px solid rgba(var(--v-theme-secondary-darken-1), 1);
}
</style>