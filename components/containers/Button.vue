<script setup>
const props = defineProps({
  title: {
    type: String
  },
  baseColor: {
    type: String,
    required: false,
    default: null
  },
  activeColor: {
    type: String,
    required: false,
    default: null
  }
})
</script>
<template>
  <div class="button" :class="{ default: !baseColor, activeDefault: !activeColor}">{{ title }}</div>
</template>

</script>

<style scoped>
.button {
  border-radius: 5px;
  transition: 0.1s ease-in-out;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: transparent;
  cursor: pointer;
}

.button.default {
  background-color: rgba(var(--v-base-color), var(--v-base-button-opacity));
}

.button.custom {

}

.button.defaultActive:hover {
  background-color: rgba(var(--v-base-color), var(--v-base-button-opacity));
}

.button.customActive:hover {

}


.button:hover {
  border-bottom: 3px solid rgb(var(--v-base-button-hover-color));
  display: inline-block;
  line-height: 22px;
  height: 30px;
  color: rgb(var(--v-base-button-hover-color));
}
</style>