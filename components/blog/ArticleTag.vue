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
  return `/blog/tags/${props.value}/`
})

const emits = defineEmits(['select-tag']);
</script>

<template>
    <div 
      v-if="enableLink"
      class="tag is-btn"
      @click.stop="router.push(linkUrl)"
    >
      #{{ value }}
    </div>
    <div 
      v-else
      class="tag is-btn"
      @click.stop="emits('select-tag', value)"
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