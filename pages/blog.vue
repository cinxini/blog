<script  setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/post').find();
})  
console.log(blogPostList)

const count = await queryContent('/post').count();

console.log('count', count)
</script>

<template>
  <v-container style=" max-width: 800px; min-width: 400px;">
    <div >
    <h1 class="poppins-regular">Recent Posts</h1>
    <v-card v-for="blogPost in blogPostList" :key="blogPost._path" class="my-4" color="white">
      <div class="ma-0 pa-4">
        <v-row no-gutters class="text-caption poppins-regular pb-0" >
          <v-col>{{ blogPost.dates.published }}</v-col>
        </v-row>
        <v-row  no-gutters class="text-wrap noto-serif-display-semibold text-h4">
          <v-col>{{ blogPost.title }}</v-col>
        </v-row>
      </div>
      <v-card-text class="ma-0 px-4 py-0 poppins-extralight text-body-2" >{{ blogPost.description }}</v-card-text>
      <v-row  no-gutters class="ma-0 pa-4 text-wrap text-caption poppins-regular">
          <v-col>
            <div class="d-flex flex-row">
              <div class="mr-1">{{ blogPost.category }}</div>
              <div class="mr-1">|</div>
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