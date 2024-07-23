<script setup>
import { computed } from 'vue';

const router = useRouter();
const props = defineProps({
  value: {
    type: String,
    required: true
  }
})

const linkUrl = computed(() => {
  return `/blog/tags/${props.value}/`
})
</script>

<template>
    <div 
      class="tag is-btn"
      @click.stop="router.push(linkUrl)"
    >
      #{{ value }}
    </div>
</template>



<style scoped>
.tag {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
  border-radius: 5;
  transition: 0.05s ease-in-out;
}

.tag:hover {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.7);
  border-bottom: 2px solid rgba(var(--v-theme-secondaryContainer), 1);
  display: inline-block;
  line-height: 0.95;
}
</style>