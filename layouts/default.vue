<template>
  <v-app class="main-background">

    <v-app-bar :elevation="0" color="white">
      <v-row no-gutters>
      <v-col cols="2" class="d-flex flex-row">
        <div class="vertical-center mx-4" >
          <!-- <v-img
            :width="151"
            aspect-ratio="16/9"
            cover
            src="@/assets/images/logo.png"
          ></v-img> -->
          <h1><span class="pacifico-regular">nutnaree.kleaw</span></h1>
        </div>
        
      </v-col>
      <v-col  class="d-flex justify-center ">
          <div class="vertical-center">
            <v-btn >about</v-btn>
            <v-btn >blog</v-btn>
            <v-btn >portfolio</v-btn>
        </div>
      </v-col>
      <v-col cols="2"  class="d-flex flex-row-reverse">
        <div class="vertical-center">
          <v-btn icon="fa-brands fa-medium"></v-btn>
          <!-- <v-btn><v-icon icon="fa-brands fa-linkedin" /></v-btn> -->
          <v-btn icon="fa-brands fa-linkedin-in"></v-btn>
          <!-- <v-btn><v-icon icon="fa-brands fa-square-x-twitter" /></v-btn>  -->
          <v-btn icon="fa-brands fa-x-twitter"></v-btn>     
          <!-- <v-btn><v-icon icon="fa-brands fa-square-github" /></v-btn> -->
          <v-btn icon="fa-brands fa-github-alt"></v-btn>
        </div>
      </v-col>
    </v-row>
    </v-app-bar>

    <v-main>
    <slot />
    </v-main>

  </v-app>
  
</template>

<script setup>
import { VApp } from 'vuetify/components';

</script>

<style >
.vertical-center {
  display: flex;
  align-items: center;
}
.main-background{
  background: white;
}

.josefin-slab-bold {
  font-family: "Josefin Slab", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}

.lobster-regular {
  font-family: "Lobster", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.pacifico-regular {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
}

</style>