<script setup>
import { computed } from 'vue';
import c from '@/constants/project';

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
    <v-row no-gutters class="text-caption poppins-regular pb-2">
      <v-col cols="3">
        <v-img :src="coverImg" cover height="100%">
          <template v-slot:error>
            <v-img class="mx-auto" height="300" max-width="500" :src="c.cover"></v-img>
          </template>
        </v-img>
      </v-col>
      <v-col cols="9">
        <div class="ma-0 px-4 py-2">
          <v-row no-gutters class="text-caption poppins-regular pb-2">
            <v-col class="d-flex flex-row  align-center">
              <Category :value="project.category" :enable-link="true" />
            </v-col>
          </v-row>
          <v-row no-gutters class="text-wrap">
            <v-col>
              <a class="title text-h4 text-primary" :href="project._path">{{ project.title }}</a>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style></style>