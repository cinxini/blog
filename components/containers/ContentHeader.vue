<script setup>
const props = defineProps({
  category: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: false,
    default: null,
    nullable: true
  },
  size: {
    type: String,
    default: 'small'
  },
  date: {
    type: String,
    required: false,
    nullable: true,
    default: null
  }
});
</script>

<template>
  <div class="d-flex flex-row h-auto justify-start">

    <!-- page: project or blog -->
    <v-hover v-if="page">
      <template v-slot:default="{ isHovering, props }">
        <v-chip v-bind="props" :size="size" density="comfortable" label class="pageChip ma-0 rounded-s-sm"
          variant="flat" color="tertiary" rounded="0">
          <v-icon v-if="page === 'project'" icon="fa-solid fa-code" size="x-small" start />
          <v-icon v-else icon="fa-solid fa-quote-right" size="x-small" start />
          {{ page }}</v-chip>
      </template>
    </v-hover>

    <!-- Category -->
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-chip v-bind:="props" :size="size" density="comfortable" class="categoryChip ma-0 rounded-e-sm"
          variant="outlined" rounded="0" :color="isHovering ? 'tertiary' : 'baseColor'" label link>
          <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
          {{ category }}
        </v-chip>
      </template>
    </v-hover>

    <!-- optional date -->
    <v-chip v-if="date" variant="text" :size="size" density="comfortable">
      <v-icon icon="fa-regular fa-calendar" size="x-small" color="baseVariant" start />
      {{ date }}
    </v-chip>

  </div>
</template>



<style scoped>
.latest-title a {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5;
}


.latest-title a:hover {
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 4px;
  color: rgb(var(--v-theme-primary))
}

.mytag {
  color: rgb(var(--v-base-color));
}

.categoryChip {
  color: rgb(var(--v-base-color));
}
</style>