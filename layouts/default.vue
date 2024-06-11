<template>
  <v-app>

    <v-app-bar :elevation="0">
      <!-- <template v-slot:prepend>
        <v-img
    :width="151"
    aspect-ratio="16/9"
    cover
    src="@/assets/images/logo.png"
  ></v-img>
      </template>
      <v-app-bar-title class=" d-flex justify-center">Application Bar</v-app-bar-title> -->
      <v-row no-gutters>
      <v-col cols="2" class="d-flex flex-row">
        <div class="vertical-center"><v-img
          :width="151"
          aspect-ratio="16/9"
          cover
          src="@/assets/images/logo.png"
        ></v-img></div>
        
      </v-col>
      <v-col  class="d-flex justify-center ">
          <div class="vertical-center">
            <v-btn color="primary">about</v-btn>
            <v-btn color="primary">blog</v-btn>
            <v-btn color="primary">portfolio</v-btn>
        </div>
      </v-col>
      <v-col cols="2"  class="d-flex flex-row-reverse">
        <div class="vertical-center">
          <v-btn color="primary">b1</v-btn>
          <v-btn color="primary">b2</v-btn>
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

<style>
.vertical-center {
  display: flex;
  align-items: center;
}
</style>