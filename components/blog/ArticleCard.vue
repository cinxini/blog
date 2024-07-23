<script setup>
import Button01 from '@/components/buttons/Buttun01.vue';
import Category from '@/components/blog/ArticleCategory.vue';
import Tag from '@/components/blog/ArticleTag.vue';
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
    <v-row no-gutters class="text-caption poppins-regular pb-2">
      <v-col cols="4">
        <v-img src="~/assets/images/blog/BLOG101.png" cover height="100%"></v-img>
      </v-col>
      <v-col cols="8">
        <div>
          <div class="ma-0 px-4 py-2">
            <v-row no-gutters class="text-caption poppins-regular pb-2">
              <v-col class="d-flex flex-row  align-center">
                <Category :value="article.category" :enable-link="true" />
              </v-col>
            </v-row>
            <v-row no-gutters class="text-wrap  text-h4 text-primary">
              <v-col class="article-title is-btn" @click="postClickHandler(article._path)">{{ article.title }}</v-col>
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
                    <Tag v-for="tag in article.tags" :key="tag" :value="tag" />
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
</style>