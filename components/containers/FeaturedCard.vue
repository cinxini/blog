<script setup>
import ContentFooter from '@/components/containers/ContentFooter.vue';
import ContentHeader from '@/components/containers/ContentHeader.vue';
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
        <ContentHeader :is-center="true" :category="content.category" :page="extractPageFromPath(content._path)" />
      </div>
    </div>
    <v-sheet height="45%" class="d-flex flex-column pa-3" color="transparent">
      <v-chip variant="text" size="x-small" density="comfortable">
        <v-icon icon="fa-regular fa-calendar" size="x-small" color="baseVariant" start />
        {{ content.dates.published }}
      </v-chip>
      <div class="feature-title mb-2">{{ content.title }}{{ content.title }}</div>
      <ContentFooter :tags="content.tags" />
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