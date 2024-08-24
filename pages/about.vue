<script setup>
import ArticleBody from '@/components/blog/ArticleBody.vue';
import { ref } from 'vue';


const isOpenned = ref(false);
const { path } = useRoute();
const { data: aboutPost } = await useAsyncData(`aboutme`, () => {
  return queryContent().where({ _path: path }).findOne();
})
// const { data: myContent } = await useAsyncData('aboutme', () => queryContent('/info').find())
console.log(aboutPost.value)
</script>


<template>
  <v-container class="main-container w-66">
    <p class="text-center text-h5">{{ aboutPost.title }}</p>

    <div class="d-flex flex-column align-center ga-1 my-4">
      <v-hover v-slot="{ isHovering, props }">
        <v-avatar size="110" class="mb-3 avatar" v-bind="props" :class="`elevation-${isHovering ? 5 : 2}`"
          variant="elevated">
          <img src="@/assets/images/avatar.png" alt="avatarImage" class="avatar-image" />
        </v-avatar>
      </v-hover>
      <div>
        <div class="text-h6 text-primary font-weight-bold text-center">{{ aboutPost.name }}</div>
        <div class="text-caption text-grey font-weight-medium my-1 text-center mt-0">{{ aboutPost.shortBio }}</div>
      </div>
      <p class="d-flex flex-row ga-3 my-3">
        <v-btn v-if="aboutPost.social.medium" class="social__bttn" icon="fa-brands fa-medium" size="small"
          :href="aboutPost.social.medium" target="_blank" />
        <v-btn v-if="aboutPost.social.linkedin" class="social__bttn" icon="fa-brands fa-linkedin-in" size="small"
          :href="aboutPost.social.linkedin" target="_blank" />
        <v-btn v-if="aboutPost.social.x" class="social__bttn" icon="fa-brands fa-x-twitter" size="small"
          :href="aboutPost.social.x" target="_blank" />
        <v-btn v-if="aboutPost.social.github" class="social__bttn" icon="fa-brands fa-github-alt" size="small"
          :href="aboutPost.social.github" target="_blank" />
        <v-btn v-if="aboutPost.social.kaggle" class="social__bttn" icon="fa-brands fa-kaggle" size="small"
          :href="aboutPost.social.kaggle" target="_blank" />
      </p>
      <div style="height: 30px;">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn v-bind="props" :variant="isHovering ? 'tonal' : 'flat'" :color="isHovering ? 'primary' : 'baseColor'"
              class="mybutton" density="comfortable" @click="isOpenned = !isOpenned" width="150">
              <span>{{ isOpenned ? 'Hide' : 'More About Me' }}</span>
            </v-btn>
          </template>
        </v-hover>
      </div>
    </div>
    <div v-if="isOpenned">
      <ArticleBody class="poppins my-4 main-background">
        <ContentDoc path="/about" />
      </ArticleBody>
    </div>

  </v-container>
</template>


<style scoped>
.mybutton {
  text-transform: capitalize;
  color: rgb(var(--v-base-color));
}



.social__bttn {
  color: rgb(var(--v-base-button-color));
}

.social__bttn:hover {
  color: rgb(var(--v-base-button-hover-color));
}

/* 
.more__button {
  background-color: rgba(var(--v-base-color), var(--v-base-button-opacity));
  border-radius: 5px;
  transition: 0.1s ease-in-out;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: transparent;
  cursor: pointer;
}

.more__button:hover {
  background-color: rgba(var(--v-base-button-hover-color), var(--v-base-button-opacity));
  border-bottom: 3px solid rgb(var(--v-base-button-hover-color));
  display: inline-block;
  line-height: 22px;
  height: 30px;
  color: rgb(var(--v-base-button-hover-color));
} */
</style>