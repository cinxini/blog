<script setup>
import Category from '@/components/blog/ArticleCategory.vue';
import Tag from '@/components/blog/ArticleTag.vue';
import FlexBox from '@/components/containers/FlexBox.vue';
import c from '@/constants/blog';

const { data: tags } = useAsyncData(
  'tags', async () => {
    const allTags = await queryContent('/blog').only(['tags']).find()
    const tagCount = {};
    allTags.forEach(tags => {
      tags.tags.forEach(tag => {
        if (tagCount[tag])
          tagCount[tag]++;
        else
          tagCount[tag] = 1;
      })
    })

    return Object.entries(tagCount).sort((a, b) => {
      return (a[1] > b[1] ? -1 : 1);
    }).slice(0, c.TOP_NUM_TAGS)
  }
);



const categorySelectedHandler = (e) => {
  console.log(e) 
}

const tagSelectedHandler = (e) => {
  console.log(e) 
}
</script>

<template>
  <v-navigation-drawer permanent app floating width="250" style="position:fixed; top:0; left:10; overflow-y: auto; "
    variant="plain" class="main-background">
    <div style="padding-top: 50px; text-align: left;">
      <v-list-item>
        <p>Category</p>
        <FlexBox style="flex-wrap: wrap;">
          <Category  
            value="all" 
            :enable-link="false" 
            @select-category="categorySelectedHandler" 
          />
          <Category
            v-for="cat of c.CATEGORY_LIST" :key="cat"
            :value="cat" 
            :enable-link="false" 
            @select-category="categorySelectedHandler" 
          />
        </FlexBox>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Tags</v-list-item-title>
        <v-list-item-subtitle>
          <FlexBox style="flex-wrap: wrap;">
            <Tag v-for="tag in tags" :key="tag" :value="tag[0]" :enable-link="false" @select-tag="tagSelectedHandler" />
          </FlexBox>
        </v-list-item-subtitle>
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<style></style>