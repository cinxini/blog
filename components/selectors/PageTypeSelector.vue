<script setup>
const selectedPageType = defineModel()
</script>

<template>
  <div class="d-flex flex-row justify-center">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-chip v-bind="props" class="rounded-s-lg" rounded="0"
          :color="isHovering || selectedPageType === 'all' ? 'tertiary' : 'base'"
          :variant="selectedPageType === 'all' ? 'flat' : 'tonal'" size="small" label link
          @click="selectedPageType = 'all'">
          <v-icon icon="fa-solid fa-box-archive" size="small" start />
          all</v-chip>
      </template>
    </v-hover>

    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-chip v-bind="props" class="rounded-0"
          :color="isHovering || selectedPageType === 'project' ? 'tertiary' : 'base'"
          :variant="selectedPageType === 'project' ? 'flat' : 'tonal'" size="small" label link
          @click="selectedPageType = 'project'">
          <v-icon icon="fa-solid fa-code" size="small" start />
          project</v-chip>
      </template>
    </v-hover>

    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-chip v-bind="props" class="rounded-e-lg redborder" rounded="0"
          :color="isHovering || selectedPageType === 'blog' ? 'tertiary' : 'base'"
          :variant="selectedPageType === 'blog' ? 'flat' : 'tonal'" label link size="small"
          @click="selectedPageType = 'blog'">
          <v-icon icon="fa-solid fa-quote-right" size="small" start />
          blog
        </v-chip>
      </template>
    </v-hover>
  </div>
</template>



<style></style>