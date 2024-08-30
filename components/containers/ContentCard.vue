<script setup>
import ContentFooter from '@/components/containers/ContentFooter.vue';
import ContentHeader from '@/components/containers/ContentHeader.vue';
import c from '@/constants/project';
import { computed } from 'vue';

const router = useRouter();
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const coverImg = computed(() => {
  if (props.content.coverImage) {
    return props.content.coverImage;
  } else {
    return `${c.COVER}`;
  }
})

const extractPageFromPath = (path) => { return path.split('/')[1] }

</script>

<template>
  <v-card class="my-4 main-background" variant="plain" :ripple="false">
    <v-row no-gutters class="text-caption poppins-regular">
      <v-col cols="3">
        <v-img :src="coverImg" cover height="100%">
          <template v-slot:error>
            <v-img class="mx-auto" height="300" max-width="500" :src="c.COVER"></v-img>
          </template>
        </v-img>
      </v-col>
      <v-col cols="9" class="d-flex flex-column pa-3">
        <ContentHeader :category="content.category" :page="extractPageFromPath(content._path)"
          :date="content.dates.published" class="mb-1" />
        <div class="content-title mb-2"><a :href="content._path">{{ content.title }}</a></div>
        <div class="content-description mb-1">
          {{ content.description.substring(0, c.DESCRIPTION_MAX_CHAR) }}{{ content.description.length > c.DESCRIPTION_MAX_CHAR ? '...' : '' }}
        </div>
        <div class="d-flex flex-row justify-space-between justify-end">
          <ContentFooter :tags="content.tags" />
          <div class="d-flex flex-row ga-2 justify-end">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-btn v-bind="props" v-if="content.github" class="mybutton" icon="fa-brands fa-github-alt"
                  :variant="isHovering ? 'tonal' : 'flat'" :color="isHovering ? 'primary' : 'baseColor'" size="small"
                  density="comfortable" :href="content.github" target="_blank" />
              </template>
            </v-hover>

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-btn v-bind="props" :variant="isHovering ? 'tonal' : 'flat'"
                  :color="isHovering ? 'primary' : 'baseColor'" class="mybutton" density="comfortable" width="150"
                  @click="router.push(content._path)">
                  Read More
                </v-btn>
              </template>
            </v-hover>
          </div>

        </div>

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.content-title a {
  /* color: rgb(var(--v-theme-primary)); */
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.0) 6px;
  transition: all .3s ease-in-out;
}

.content-title a:hover {
  /* color: rgb(var(--v-theme-primary)); */
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 6px;
}

/* .mybutton {
  color: rgb(var(--v-theme-base))
} */
</style>