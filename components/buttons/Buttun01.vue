<script setup>
import { computed } from 'vue';

const router = useRouter();
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="readmore is-btn"
    @click.stop="router.push(path)">{{ value }}
  </div>
</template>



<style scoped>
.readmore {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.3);
  border-radius: 5px;
  transition: 0.05s ease-in-out;
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  padding-left: 10px; 
  padding-right: 10px; 
  /* border-radius: 5; */
}

.readmore:hover {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.6);
  border-bottom: 2px solid rgba(var(--v-theme-tertiaryContainer), 1);
  display: inline-block;
  line-height: 0.95;
}
</style>