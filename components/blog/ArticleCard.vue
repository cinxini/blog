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

const tagClicked = (tag) => {

  console.log('tag:::', tag)
  router.push(`/blog/tags/${tag}/`)
}

const postClickHandler = (path) => {
  console.log('path:::', path)
  router.push(path)
}

const clickHandler = (e, arg) => {
  console.log(e)
}
</script>
<template>
  <v-card class="my-4 main-background" variant="plain" :ripple="false">
    <div class="ma-0 px-4 py-2">
      <v-row no-gutters class="text-caption poppins-regular pb-2">
        <v-col class="d-flex flex-row  align-center">
          <v-chip class="category is-btn" label variant="outlined" density="comfortable" size="small">
            {{ article.category }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row no-gutters class="text-wrap  text-h4 text-primary">
        <v-col class="article-title is-btn" @click="postClickHandler(article._path)">{{ article.title }}</v-col>
      </v-row>
    </div>
    <v-card-text class="ma-0 px-4 py-0 poppins-extralight text-body-2">{{ article.description }}</v-card-text>
    <v-row no-gutters class="ma-0 px-4 py-2 text-wrap text-caption poppins-regular">
      <v-col>
        <FlexBox class="ga-2" style="justify-content: space-between;">
          <FlexBox class="ga-2">
            <div class="">{{ date.format(article.dates.published, 'fullDate') }}</div>
            <span>|</span>
            <v-icon icon="fa-solid fa-tag" size="small" color="secondary"></v-icon>
            <FlexBox class="ga-1">
              <div v-for="tag in article.tags" :key="tag" class="tag is-btn" @click.stop="tagClicked(tag)">
                #{{ tag }}
              </div>
            </FlexBox>
          </FlexBox>

          <div class="readmore is-btn" style="padding-left: 10px; padding-right: 10px; border-radius: 5;"
            @click="postClickHandler(article._path)">Read More
          </div>
        </FlexBox>
      </v-col>
    </v-row>
  </v-card>
</template>

<style>
.v-card--link:hover {
  background: none;
  background-color: white;
}

.v-card--link:before {
  background: none;
}

.v-card--variant-plain {
  opacity: 1 !important;
  transition: 0.5s ease-in-out;
}

.v-card--variant-plain:hover {
  background-color: rgba(var(--v-theme-tertiaryContainer), 0.06);
  opacity: 1;
}
</style>