<script  setup>
import { useRouter } from 'vue-router';
import { useDate } from 'vuetify';
const date = useDate()
const router = useRouter();

const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/post').sort({ 'dates.published' : -1 }).find();
})  
console.log(blogPostList)

const count = await queryContent('/post').count();

console.log('count', count)
</script>

<template>
  <v-container style=" max-width: 800px; min-width: 400px;">
    <div >
    <p class="text-center text-h5 poppins-regular">Recent Posts</p>
    <v-card v-for="blogPost in blogPostList" :key="blogPost._path" class="my-4"  @click="router.push(blogPost._path)" variant="flat">
      <div class="ma-0 pa-4">
        <v-row no-gutters class="text-caption poppins-regular pb-0" >
          <v-col class="d-flex flex-row  align-center">
            <div class="">{{ date.format(blogPost.dates.published, 'fullDate')}}</div>
            <v-chip class="mx-2" label variant="outlined" density="comfortable" size="small">
              {{ blogPost.category }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row  no-gutters class="text-wrap noto-serif-display-bold text-h4">
          <v-col>{{ blogPost.title }}</v-col>
        </v-row>
      </div>
      <v-card-text class="ma-0 px-4 py-0 poppins-extralight text-body-2" >{{ blogPost.description }}</v-card-text>
      <v-row  no-gutters class="ma-0 pa-4 text-wrap text-caption poppins-regular">
          <v-col>
            <div class="d-flex flex-row">
              <div v-for="tag in blogPost.tags" class="mr-1">
                #{{ tag }}
              </div>
            </div>
          
          </v-col>
      </v-row>
      <!-- <template v-slot:actions >
        <v-btn class="poppins-regular ma-2" text="Read More" variant="outlined" size="x-small" :to="blogPost._path"></v-btn>
      </template> -->
    </v-card>
  </div>
  </v-container>
  

  
  
</template>



<style>

</style>