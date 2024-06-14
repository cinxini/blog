<template>
  <v-container style="max-width: 900px; min-width: 400px;">
    <div >
    <h1 class="poppins-regular">Recent Posts</h1>
    <v-card v-for="blogPost in blogPostList" :key="blogPost._path" class="my-4" variant="plain" style="background: grey;">
      <template v-slot:prepend>
          <div class="text-caption poppins-regular">{{ blogPost.dates.published }}</div>
      </template>
      <v-card-title class="text-wrap" style="background: white;">{{ blogPost.title }}</v-card-title>
      <v-card-text class="" style="background:lightcyan">jkjkjk</v-card-text>
      <template v-slot:actions >
        <v-btn class="poppins-regular" text="Read More" variant="outlined" size="x-small" style="background:yellow;" :to="blogPost._path"></v-btn>
      </template>
    </v-card>
  </div>
  </v-container>
</template>

<script  setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/post').find();
})  
console.log(blogPostList)
</script>

<style>

</style>