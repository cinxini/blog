<script setup>
import Category from '@/components/blog/ArticleCategory.vue';
import Tag from '@/components/blog/ArticleTag.vue';
import Button01 from '@/components/buttons/Buttun01.vue';
import FlexBox from '@/components/containers/FlexBox.vue';
import c from '@/constants/blog';
import { computed } from 'vue';
import { useDate } from 'vuetify';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

const date = useDate()
console.log(props.article)

const coverImg = computed(() => {
  console.log('cover img', props.article.coverImg)
  if (props.article.coverImage) {
    return props.article.coverImage;
  } else if (c.DEFAULT_COVER[props.article.category]) {
    return `${c.DEFAULT_COVER[props.article.category]}`;
  } else {
    return `${c.DEFAULT_COVER.error}`;
  }
})
</script>
<template>
  <v-card class="my-4 main-background" variant="plain" :ripple="false">
    <v-row no-gutters class="text-caption poppins-regular pb-2">
      <v-col cols="4">
        <v-img :src="coverImg" cover height="100%">
          <template v-slot:error>
            <v-img class="mx-auto" height="300" max-width="500" :src="c.DEFAULT_COVER.error"></v-img>
          </template>
        </v-img>
      </v-col>
      <v-col cols="8">
        <div>
          <div class="ma-0 px-4 py-2">
            <v-row no-gutters class="text-caption poppins-regular pb-2">
              <v-col class="d-flex flex-row  align-center">
                <Category :value="article.category" :enable-link="true" />
              </v-col>
            </v-row>
            <v-row no-gutters class="text-wrap">
              <v-col>
                <a class="title text-h4 text-primary" :href="article._path">{{ article.title }}</a>
              </v-col>
            </v-row>
          </div>
          <div class="ma-0 px-4 py-0 poppins-extralight text-body-2">
            {{ article.description.substring(0, 150) }}{{ article.description.length > 150 ? '...' : '' }}
          </div>
          <v-row no-gutters class="ma-0 px-4 py-2 text-wrap text-caption poppins-regular">
            <v-col>
              <FlexBox class="ga-2" style="justify-content: space-between; ">
                <FlexBox class="ga-2">
                  <div>{{ date.format(article.dates.published, 'fullDate') }}</div>
                  <span>|</span>
                  <v-icon icon="fa-solid fa-tag" size="small" color="secondary"></v-icon>
                  <FlexBox class="ga-1 tag-area" style="">
                    <Tag v-for="tag in article.tags" :key="tag" :value="tag" :enable-link="true" />
                  </FlexBox>
                </FlexBox>
                <Button01 value="Read More" :path="article._path" />
              </FlexBox>

            </v-col>
          </v-row>
        </div>
      </v-col>

    </v-row>



  </v-card>
</template>

<style>
.tag-area {
  width: 280px;
  overflow-x: auto;
}

.tag-area::-webkit-scrollbar {
  display: none;
}


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

a.title {
  /* color: rgb(var(--v-theme-primary)); */
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.0) 6px;
  transition: all .3s ease-in-out;
}

a.title:hover {
  /* color: rgb(var(--v-theme-primary)); */
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 6px;
}
</style>