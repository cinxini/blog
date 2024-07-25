<script setup>
import Category from '@/components/blog/ArticleCategory.vue';
import Tag from '@/components/blog/ArticleTag.vue';
import Button02 from '@/components/buttons/Button02.vue';
import FlexBox from '@/components/containers/FlexBox.vue';
import c from '@/constants/blog';
import { computed, onMounted, ref } from 'vue';

const fetchTags = async () => {
  const allTags = await queryContent('/blog').only(['tags']).find();
  const tagCount = {};
  allTags.forEach(tags => {
    tags.tags.forEach(tag => {
      if (tagCount[tag]) {
        tagCount[tag]++;
      } else {
        tagCount[tag] = 1;
      }
    })
  })

  return Object.entries(tagCount).sort((a, b) => {
    return (a[1] > b[1] ? -1 : 1);
  }).slice(0, c.TOP_NUM_TAGS)
}

const { data: tags } = useAsyncData(
  'tags', fetchTags
);



const openFilter = ref(false);
const categoryList = ref({})
const tagList = ref({});

const filteredCategories = computed(() => {
  const filtered = [];
  Object.entries(categoryList.value).forEach(category => {
    if (category[1]) filtered.push(category[0]);
  })
  return filtered;
})

const filteredTags = computed(() => {
  const filtered = [];
  Object.entries(tagList.value).forEach(tag => {
    if (tag[1]) filtered.push(tag[0]);
  })
  return filtered;
})

const toggleFilter = computed(() => {
  if (openFilter.value) {
    return 'block';
  } else {
    return 'none'
  }
})

const init = () => {
  c.CATEGORY_LIST.forEach(cat => {
    categoryList.value[cat] = false;
  })

  if (tags.value) {
    tags.value.forEach(tag => {
      tagList.value[tag[0]] = false;
    })
  }

}

onMounted(async () => {
  // initialize vars
  if (!tags.value) {
    tags.value = await fetchTags();
  }
  init();
})
</script>

<template>
  <v-navigation-drawer permanent app floating width="250" style="position:fixed; top:0; left:10; overflow-y: auto; "
    variant="plain" class="main-background">
    <div style="padding-top: 50px; text-align: left;">
      <v-list-item>

        <v-btn class="pa-0" icon="fa-solid fa-filter" size="small" variant="plain"
          :color="openFilter ? 'primary' : 'grey'" @click="openFilter = !openFilter"></v-btn>

      </v-list-item>

      <div :style="{ display: toggleFilter }">
        <v-list-item class="ml-2 my-3">
          <p class="mb-1">Category</p>
          <FlexBox style="flex-wrap: wrap;">
            <Category v-for="cat of c.CATEGORY_LIST" :key="cat" :value="cat" :enable-link="false"
              :active="categoryList[cat]" @select-category="categoryList[cat] = !categoryList[cat]" />
          </FlexBox>
        </v-list-item>

        <v-list-item class="ml-2 my-3">
          <p class="mb-1">Tags</p>
          <FlexBox style="flex-wrap: wrap;">
            <Tag v-for="tag in tags" :key="tag" :value="tag[0]" :enable-link="false" :active="tagList[tag[0]]"
              @select-tag="tagList[tag[0]] = !tagList[tag[0]]" />
          </FlexBox>
        </v-list-item>
        <v-list-item style="position: relative;" class="ml-2 my-3">
          <Button02 value="Reset" style="width: 100%;" @click.stop="init" />
        </v-list-item>
      </div>
    </div>

  </v-navigation-drawer>
</template>

<style scoped>
/* .reset {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.3);
  border-radius: 5px;
  transition: 0.05s ease-in-out;
  width: 100%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  padding-left: 10px;
  padding-right: 10px;
   border-radius: 5; 
}

.reset:hover {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.6);
  border-bottom: 2px solid rgba(var(--v-theme-tertiaryContainer), 1);
  display: inline-block;
  line-height: 0.95;
}

*/
</style>