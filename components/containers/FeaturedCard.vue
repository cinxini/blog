<script setup>
const props = defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <v-card variant="flat" width="280" height="250">
    <div>
      <v-img src="public/images/project/default.png" cover height="70%"> 
      </v-img>
    </div>
    <v-sheet height="30%" class="d-flex flex-column">
      <div>{{ content.title }}</div>
      <div>{{ content.dates.published }}</div>
      <div>{{ content.tags }}</div>
    </v-sheet>
  </v-card>
</template>


<style>

</style>