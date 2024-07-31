<script setup>
import c from '@/constants/index';

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const extractPageFromPath = (path) => { return path.split('/')[1] }
</script>

<template>
  <v-card :key="content._path" width="49%" min-height="120" variant="flat" color="transparent">
    <v-row no-gutters style="height: 100%;">
      <v-col cols="3" class="position-relative">
        <v-img src="public/images/project/default.png" cover height="100%" rounded />
      </v-col>

      <v-col class="d-flex flex-column pa-3">

        <div class="d-flex flex-row h-auto justify-start">

          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-chip v-bind="props" size="x-small" density="comfortable" label class="pageChip ma-0 rounded-s-sm"
                variant="flat" color="tertiary" rounded="0">
                <v-icon v-if="extractPageFromPath(content._path) === 'project'" icon="fa-solid fa-code" size="x-small"
                  start />
                <v-icon v-else icon="fa-solid fa-quote-right" size="x-small" start />
                {{ extractPageFromPath(content._path) }}</v-chip>
            </template>
          </v-hover>

          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-chip v-bind:="props" size="x-small" density="comfortable" class="categoryChip ma-0 rounded-e-sm"
                variant="tonal" rounded="0" :color="isHovering ? 'tertiary' : 'baseColor'" label>
                <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
                {{ content.category }}
              </v-chip>
            </template>
          </v-hover>

          <v-chip variant="text" size="x-small" density="comfortable">{{ content.dates.published }}</v-chip>

        </div>

        <div class="latest-title mb-2"><a>{{ content.title }}</a></div>
        <div class="text-caption">
          {{ content.description.substring(0, c.DESCRIPTION_MAX_CHAR) }}{{ content.description.length > c.DESCRIPTION_MAX_CHAR ? '...' : '' }}
        </div>

        <div class="d-flex flex-row ga-1 align-center">
          <v-icon icon="fa-solid fa-tags" size="x-small" color="secondary" />
          <div v-for="tag in content.tags" :key="tag">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-chip class="mytag" v-bind="props" :ripple="false" link size="small" density="compact" pill
                  :color="isHovering ? 'secondary' : 'baseColor'" variant="tonal">
                  {{ tag }}</v-chip>
              </template>
            </v-hover>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>



<style scoped>
.latest-title a {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.05rem;
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