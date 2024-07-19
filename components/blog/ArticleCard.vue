<script setup>
import FlexBox from '@/components/containers/FlexBox.vue';
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

const date = useDate()
const router = useRouter();
</script>
<template>
  <v-card class="my-2 main-background" @click="router.push(article._path)" variant="flat">
    <div class="ma-0 px-4 py-2">
      <v-row no-gutters class="text-caption poppins-regular pb-2">
        <v-col class="d-flex flex-row  align-center">
          <v-chip class="category" label variant="outlined" density="comfortable" size="small" rounded="0">
            {{ article.category }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row no-gutters class="text-wrap  text-h4 text-primary">
        <v-col>{{ article.title }}</v-col>
      </v-row>
    </div>
    <v-card-text class="ma-0 px-4 py-0 poppins-extralight text-body-2">{{ article.description }}</v-card-text>
    <v-row no-gutters class="ma-0 px-4 py-2 text-wrap text-caption poppins-regular">
      <v-col>
        <FlexBox class="ga-2">
          <div class="">{{ date.format(article.dates.published, 'fullDate') }}</div>
          <span>|</span>
          <v-icon icon="fa-solid fa-tag" size="small" color="secondary"></v-icon>
          <FlexBox class="ga-1">
            <div v-for="tag in article.tags" :key="tag">
              #{{ tag }}
            </div>
          </FlexBox>
        </FlexBox>
      </v-col>
    </v-row>
  </v-card>
</template>

<style></style>