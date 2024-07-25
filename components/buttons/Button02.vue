<script setup>

const props = defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="button is-btn">{{ value }}
  </div>
</template>



<style scoped>
.button {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.3);
  border-radius: 5;
  transition: 0.1s ease-in-out;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: transparent;
}

.button:hover {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.6);
  border-bottom: 2px solid rgba(var(--v-theme-tertiaryContainer), 1);
  display: inline-block;
  line-height: 0.4;
}
</style>