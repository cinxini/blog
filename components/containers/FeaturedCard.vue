<script setup>
const props = defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <v-card variant="flat" width="280" height="250">
    <div style="height: 70%;" class="position-relative">
      <v-img src="public/images/project/default.png" cover > 
      </v-img>
      <div class="bg-surface position-absolute left-0 top-0 cursor-pointer">test</div>
    </div>
    <v-sheet height="30%" class="d-flex flex-column">
      <div class="text-subtitle-1">{{ content.title }}</div>
      <div class="text-caption d-flex flex-row ga-2">
        <!-- <div>{{ content.dates.published }}</div>| -->
        <div>{{ content.tags }}</div>
      </div>
      
    </v-sheet>
  </v-card>
</template>


<style>

</style>