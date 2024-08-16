<script setup>
import ContentFooter from '@/components/containers/ContentFooter.vue';
import ContentHeader from '@/components/containers/ContentHeader.vue';

const props = defineProps({
  meta: {
    type: Object,
    nullable: true,
    default: null
  }
})
</script>

<template>
  <v-sheet class="main-background">
    <ContentHeader :category="meta.category" :page="meta.pageType" :date="meta.date" class="mb-1" />
    <p class="my-2 article-header-title">{{ meta.title }}</p>
    <p class="article-header-description">{{ meta.description }}</p>
    <div v-if="meta.github">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-btn v-bind="props" class="mybutton" icon="fa-brands fa-github-alt" :variant="isHovering ? 'tonal' : 'flat'"
            :color="isHovering ? 'primary' : 'baseColor'" size="small" density="comfortable" :href="meta.github"
            target="_blank" />
        </template>
      </v-hover>
    </div>
    <div class="d-flex flex-row justify-space-between justify-end">
      <ContentFooter :tags="meta.tags" />
    </div>
  </v-sheet>
</template>

<style scoped>
.article-header-title {
  color: rgb(var(--v-theme-primary));
  font-size: 1.6rem !important;
  font-weight: 500;
  line-height: 1.333;
  letter-spacing: normal !important;
  font-family: "Poppins", sans-serif;
  text-transform: none !important;
}

.article-header-description {
  font-size: 0.875rem !important;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.0071428571em !important;
  font-family: "Poppins", sans-serif;
  text-transform: none !important;
}
</style>