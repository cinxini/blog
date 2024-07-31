<script setup>
const props = defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <v-card variant="flat" width="290" height="250">
    <!-- <Button title="button"></Button> -->
    <div style="height: 70%;">
      <v-img src="public/images/project/default.png" cover>
      </v-img>
    </div>
    <v-sheet height="30%" class="d-flex flex-column pa-3">

      <div class="text-subtitle-1">{{ content.title }}</div>
      <div class="text-caption d-flex flex-row ga-2">
        <!-- <div>{{ content.dates.published }}</div>| -->
        <div>{{ content.tags }}</div>
      </div>

    </v-sheet>
  </v-card>
</template>


<style></style>