<template>
  <div>
    <v-tooltip v-if="tooltip !== ''" :text="tooltip">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="section-title poppins-regular px-0" variant="plain" color="baseVariant">
          <template v-if="icon !== ''" v-slot:prepend class="pr-1">
            <v-icon :icon="icon" size="x-small" />
          </template>
          {{ title }}
        </v-btn>
      </template>
    </v-tooltip>
    <v-btn v-else class="section-title poppins-regular px-0" variant="plain" color="baseVariant">
      <template v-if="icon !== ''" v-slot:prepend class="pr-1">
        <v-icon :icon="icon" size="x-small" />
      </template>
      {{ title }}
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  tooltip: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'title'
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.section-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.6em;
  font-weight: 550;
}
</style>