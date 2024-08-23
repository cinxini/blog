<script setup>
import ArticleBody from '@/components/blog/ArticleBody.vue';
import { ref } from 'vue';


const isOpenned = ref(false);
const { data: myContent } = await useAsyncData('aboutme', () => queryContent('/info').find())
console.log(myContent.value[0]._path)
</script>


<template>
  <v-container class="main-container w-66">
    <p class="text-center text-h5">About Me</p>

    <div class="d-flex flex-column align-center ga-1 my-4">
      <v-hover v-slot="{ isHovering, props }">
        <v-avatar size="110" class="mb-3 avatar" v-bind="props" :class="`elevation-${isHovering ? 5 : 2}`"
          variant="elevated">
          <img src="@/assets/images/avatar.png" alt="avatarImage" class="avatar-image" />
        </v-avatar>
      </v-hover>
      <div>
        <div class="text-h6 text-primary font-weight-bold text-center">Nutnaree Kleawsirikul</div>
        <div class="text-caption text-grey font-weight-medium my-1 text-center mt-0">Data Scientist & Web Developer &
          Handmade Hobbyist</div>
      </div>
      <p class="d-flex flex-row ga-3 my-3">
        <v-btn class="social__bttn" icon="fa-brands fa-medium" size="small" href="https://medium.com/@nutnar.ee"
          target="_blank" />
        <v-btn class="social__bttn" icon="fa-brands fa-linkedin-in" size="small" href="https://medium.com/@cinxini"
          target="_blank" />
        <v-btn class="social__bttn" icon="fa-brands fa-x-twitter" size="small" href="https://x.com/cinxini"
          target="_blank" />
        <v-btn class="social__bttn" icon="fa-brands fa-github-alt" size="small" href="https://github.com/cinxini"
          target="_blank" />
        <v-btn class="social__bttn" icon="fa-brands fa-kaggle" size="small" href="https://www.kaggle.com/cinxini"
          target="_blank" />
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
      <!-- <p>I am a data scientist and web developer currently based in Japan. In my free time, I am all-kind-of-handmade
        hobbyist.</p> -->
      <ArticleBody class="poppins my-4 main-background">
        <ContentDoc path="/about" />
      </ArticleBody>
      <!-- <div class="md-style">
        <ContentDoc path="/about" />
      </div> -->

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