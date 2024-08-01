<script setup>
const props = defineProps({
  content: {
    type: Object
  }
})
const extractPageFromPath = (path) => { return path.split('/')[1] }

</script>

<template>
  <v-card variant="flat" width="290" height="285">
    <div style="height: 55%;" class="position-relative">
      <v-img src="public/images/project/default.png" cover>
      </v-img>
      <div class="position-absolute top-0 left-0 w-100 mt-3">
        <div class="d-flex flex-row h-auto justify-center justify-start ">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-chip v-bind="props" size="small" density="comfortable" label class="pageChip ma-0 rounded-s-sm"
                variant="flat" color="tertiary" rounded="0">
                <v-icon v-if="extractPageFromPath(content._path) === 'project'" icon="fa-solid fa-code" size="x-small"
                  start />
                <v-icon v-else icon="fa-solid fa-quote-right" size="x-small" start />
                {{ extractPageFromPath(content._path) }}</v-chip>
            </template>
          </v-hover>

          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-chip v-bind:="props" size="small" density="comfortable" class="categoryChip ma-0 rounded-e-sm"
                variant="outlined" rounded="0" :color="isHovering ? 'tertiary' : 'base'" label link>
                <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
                {{ content.category }}
              </v-chip>
            </template>
          </v-hover>



        </div>
      </div>
    </div>
    <v-sheet height="45%" class="d-flex flex-column pa-3" color="transparent">
      <v-chip variant="text" size="x-small" density="comfortable">
        <v-icon icon="fa-regular fa-calendar" size="x-small" color="baseVariant" start />
        {{ content.dates.published }}
      </v-chip>
      <div class="feature-title mb-2">{{ content.title }}{{ content.title }}</div>
      <div class="d-flex flex-row ga-1 align-center">
        <v-icon icon="fa-solid fa-tags" size="x-small" color="secondary" />
        <div v-for="tag in content.tags" :key="tag">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-chip class="mytag" v-bind="props" :ripple="false" link size="small" density="compact" pill
                :color="isHovering ? 'secondary' : 'base'" variant="tonal">
                {{ tag }}</v-chip>
            </template>
          </v-hover>
        </div>
      </div>

    </v-sheet>
  </v-card>
</template>


<style scoped>
.feature-title {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2;
}

.mytag {
  color: rgb(var(--v-base-color));
}
</style>