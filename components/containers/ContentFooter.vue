<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: false,
    nullable: true,
    default: null
  },
  date: {
    type: String,
    required: false,
    nullable: true,
    default: null
  },
  size: {
    type: String,
    default: 'small'
  }
})
</script>

<template>
  <div class="d-flex flex-row ga-1 align-center">

    <!-- optional date -->
    <v-chip v-if="date" variant="text" :size="size" density="comfortable">
      <v-icon icon="fa-regular fa-calendar" :size="size" color="baseVariant" start />
      {{ date }}
    </v-chip>

    <!-- tags -->
    <v-icon icon="fa-solid fa-tags" size="x-small" color="secondary" />
    <div v-for="tag in tags" :key="tag">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip class="mytag" v-bind="props" :ripple="false" link :size="size" density="compact" pill
            :color="isHovering ? 'secondary' : 'base'" variant="tonal" :href="`/tag/${tag}`">
            {{ tag }}</v-chip>
        </template>
      </v-hover>
    </div>
  </div>
</template>



<style scoped>
.mytag {
  color: rgb(var(--v-base-color));
}
</style>