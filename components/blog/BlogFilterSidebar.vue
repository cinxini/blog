<script setup>
import FlexBox from '@/components/containers/FlexBox.vue';
import c from '@/constants/blog';

const { data: tags } = useAsyncData(
    'tags', async () => {
      const allTags = await queryContent('/post').only(['tags']).find()
      const tagCount = {};
      allTags.forEach(tags => {
        tags.tags.forEach(tag => {
          if(tagCount[tag]) 
            tagCount[tag]++; 
          else 
            tagCount[tag] = 1;
        })
      })

      return Object.entries(tagCount).sort((a, b) => { 
        return  (a[1] > b[1] ? -1 : 1);
      }).slice(0, c.TOP_NUM_TAGS)
    }
);
</script>

<template>
  <v-navigation-drawer
      permanent
      app
      floating
      width="250" 
      style="position:fixed; top:0; left:10; overflow-y: auto; "
      variant="plain"
      class="main-background"
  >
    <div style="padding-top: 50px; text-align: left;">  
      <v-list-item>
          <p>Category</p>
          <FlexBox style="flex-wrap: wrap;">
            <v-chip label variant="outlined" density="comfortable" size="small" class="category" >all</v-chip>
            <v-chip label variant="outlined" density="comfortable" size="small" class="category" >datasci</v-chip>
            <v-chip label variant="outlined" density="comfortable" size="small" class="category" >webdev</v-chip>
            <v-chip label variant="outlined" density="comfortable" size="small" class="category" >others</v-chip>
          </FlexBox>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Tags</v-list-item-title>
        <v-list-item-subtitle>
          <FlexBox style="flex-wrap: wrap;">
            <div v-for="tag in tags" :key="tag" class="tag">#{{ tag[0] }}</div>
          </FlexBox>
        </v-list-item-subtitle>
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<style>

</style>