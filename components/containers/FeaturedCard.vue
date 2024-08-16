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
      <div class="d-flex flex-row justify-space-between">
        <v-chip variant="text" size="x-small" density="comfortable">
          <v-icon icon="fa-regular fa-calendar" size="x-small" color="baseVariant" start />
          {{ content.dates.published }}
        </v-chip>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn v-bind="props" v-if="content.github" class="mybutton" icon="fa-brands fa-github-alt"
              :variant="isHovering ? 'tonal' : 'flat'" :color="isHovering ? 'primary' : 'baseColor'" size="x-small"
              density="comfortable" :href="content.github" target="_blank" />
          </template>
        </v-hover>
      </div>

      <div class="feature-title mb-2"><a :href="content._path">{{ content.title }}</a></div>
      <ContentFooter :tags="content.tags" />
    </v-sheet>
  </v-card>
</template>


<style scoped>
.feature-title a {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2;
}

.feature-title a:hover {
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 4px;
  color: rgb(var(--v-theme-primary))
}

.mytag {
  color: rgb(var(--v-base-color));
}
</style>