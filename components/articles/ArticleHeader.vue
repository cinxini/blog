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

    <div class="d-flex flex-row ga-2  justify-start">
      <div v-if="meta.github" class="d-flex flex-row ga-1 align-center justify-end">
        <v-icon icon="fa-brands fa-github" size="x-small" color="secondary" />
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-chip class="mytag" v-bind="props" :ripple="false" link size="small" density="compact" pill
              :color="isHovering ? 'secondary' : 'base'" variant="tonal" :href="meta.github">
              {{ meta.github.split('/').at(-1) }}</v-chip>
          </template>
        </v-hover>
      </div>
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

/* a.github {
  color: rgb(var(--v-theme-base));
  transition: 0.3s;
}

a.github:hover {
  color: rgb(var(--v-theme-base));
} */
</style>