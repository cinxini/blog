<script setup>
import ContentFooter from '@/components/containers/ContentFooter.vue';
import ContentHeader from '@/components/containers/ContentHeader.vue';
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
        <content-header :category="content.category" :page="extractPageFromPath(content._path)" size="x-small"
          :date="content.dates.published" />

        <div class="latest-title mb-2"><a :href="content._path">{{ content.title }}</a></div>
        <div class="text-caption">
          {{ content.description.substring(0, c.DESCRIPTION_MAX_CHAR) }}{{ content.description.length > c.DESCRIPTION_MAX_CHAR ? '...' : '' }}
        </div>

        <ContentFooter :tags="content.tags" />

      </v-col>
    </v-row>
  </v-card>
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