<script setup>
import ContentFooter from '@/components/containers/ContentFooter.vue';
import ContentHeader from '@/components/containers/ContentHeader.vue';
import c from '@/constants/project';
import { computed } from 'vue';
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const coverImg = computed(() => {
  if (props.project.coverImage) {
    return props.project.coverImage;
  } else {
    return `${c.cover}`;
  }
})
</script>

<template>
  <v-card class="my-4 main-background" variant="plain" :ripple="false">
    <v-row no-gutters class="text-caption poppins-regular">
      <v-col cols="3">
        <v-img :src="coverImg" cover height="100%">
          <template v-slot:error>
            <v-img class="mx-auto" height="300" max-width="500" :src="c.cover"></v-img>
          </template>
        </v-img>
      </v-col>
      <v-col cols="9" class="d-flex flex-column pa-3">
        <ContentHeader :category="project.category" page="project" :date="project.dates.published" class="mb-1" />
        <div class="project-title mb-2"><a>{{ project.title }}</a></div>
        <div class="project-description mb-1">
          {{ project.description.substring(0, 150) }}{{ project.description.length > c.DESCRIPTION_MAX_CHAR ? '...' : '' }}
        </div>
        <div class="d-flex flex-row justify-space-between justify-end">
          <ContentFooter :tags="project.tags" />
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn v-bind="props" :variant="isHovering ? 'tonal' : 'flat'"
                :color="isHovering ? 'primary' : 'baseColor'" class="mybutton" density="comfortable" width="150">
                Read More
              </v-btn>
            </template>
          </v-hover>
        </div>

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.project-title a {
  /* color: rgb(var(--v-theme-primary)); */
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.0) 6px;
  transition: all .3s ease-in-out;
}

.project-title a:hover {
  /* color: rgb(var(--v-theme-primary)); */
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 6px;
}

.mybutton {
  color: rgb(var(--v-theme-base))
}
</style>