<script  setup>
import { ref } from 'vue';

const isOpenned = ref(false);
</script>


<template>
  <v-container style=" max-width: 900px; min-width: 400px;">
    <p class="text-center text-h5 poppins-regular">About Me</p>

    <div class="d-flex flex-column align-center ga-1 my-4">
      <v-hover v-slot="{ isHovering, props }">
        <v-avatar 
        size="110" 
        class="mb-3 avatar"
        v-bind="props"
        :class="`elevation-${isHovering ? 5 : 2}`"
        variant="elevated"
        >
          <img
            src="@/assets/images/avatar.png"
            alt="avatarImage"
            class="avatar-image"
          />
        </v-avatar>
      </v-hover>
      <div>
        <div class="text-h6 text-primary font-weight-bold text-center">Nutnaree Kleawsirikul</div>
        <div class="text-caption text-grey font-weight-medium my-1 text-center mt-0">Data Scientist & Web Developer & Handmade Hobbyist</div>
      </div>
      <p class="d-flex flex-row ga-3 my-3">
          <v-btn 
            class="social__bttn" 
            icon="fa-brands fa-medium" 
            size="small" 
            href="https://medium.com/@nutnar.ee"
            target="_blank"
            />
          <v-btn 
            class="social__bttn" 
            icon="fa-brands fa-linkedin-in" 
            size="small" 
            href="https://medium.com/@nutnar.ee"
            target="_blank"
            />
          <v-btn 
            class="social__bttn" 
            icon="fa-brands fa-x-twitter" 
            size="small" 
            href="https://x.com/cinxini"
            target="_blank"
            />
          <v-btn 
            class="social__bttn"
            icon="fa-brands fa-github-alt" 
            size="small" 
            href="https://github.com/nutnareek"
            target="_blank"
            />
      </p>
      <div style="height: 30px;">
        <div v-if="!isOpenned" class="more__button" @click="isOpenned=true">More About Me</div>
        <div v-else class="more__button" @click="isOpenned=false">Hide</div>
      </div>
    </div>
    <div v-if="isOpenned">
      <p>I am a data scientist and web developer currently based in Japan. In my free time, I am all-kind-of-handmade hobbyist.</p>
    </div>

  </v-container>
</template>


<style scoped>
.social__bttn {
  color: grey;
}

.social__bttn:hover {
  color: rgb(var(--v-theme-primary));
}

.more__button {
  background-color: rgba(128, 128,128, 0.05);;
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
  background-color: rgba(var(--v-theme-primary-lighten-1), 0.1);
  border-bottom: 2px solid rgba(var(--v-theme-primary), 1);
  display: inline-block;
  line-height: 20px;
  height: 30px;
  color: rgb(var(--v-theme-primary));
}
</style>