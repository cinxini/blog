<template>
  <v-app>
    <v-app-bar :elevation="0" height="50" class="appbar-border-bottom" color="background">
      <v-row no-gutters>
        <v-col cols="2" class="d-flex flex-row">
          <div class="vertical-center ma-4">
            <v-img :width="150" aspect-ratio="16/9" cover src="@/assets/images/logo4.png"></v-img>
          </div>

        </v-col>
        <v-col class="d-flex justify-center ">
          <div class="vertical-center">
            <v-btn class="ma-2 poppins-semibold text-subtitle-1" color="primary" to="/">home</v-btn>
            <v-btn class="ma-2 poppins-semibold text-subtitle-1" color="primary" to="/about">about</v-btn>
            <v-btn class="ma-2 poppins-semibold text-subtitle-1" color="primary" to="/projects">projects</v-btn>
            <v-btn class="ma-2 poppins-semibold text-subtitle-1" color="primary" to="/blogs">blog</v-btn>
          </div>
        </v-col>
        <v-col cols="2" class="d-flex flex-row-reverse">
          <div class="vertical-center ">
            <v-btn class="ma-2 pa-0" icon="fa-solid fa-magnifying-glass" size="small"></v-btn>
            <!-- <v-btn class="ma-2 pa-0" icon="fa-brands fa-medium" size="small"></v-btn> -->
            <!-- <v-btn><v-icon icon="fa-brands fa-linkedin" /></v-btn> -->
            <!-- <v-btn class="ma-2 pa-0" icon="fa-brands fa-linkedin-in" size="small"></v-btn> -->
            <!-- <v-btn><v-icon icon="fa-brands fa-square-x-twitter" /></v-btn>  -->
            <!-- <v-btn class="ma-2"  icon="fa-brands fa-x-twitter" size="small"></v-btn>      -->
            <!-- <v-btn><v-icon icon="fa-brands fa-square-github" /></v-btn> -->
            <!-- <v-btn class="mr-4 ml-2 my-2"  icon="fa-brands fa-github-alt" size="small"></v-btn> -->
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
/* .v-app-bar.v-toolbar {
  background-color: var(--v-theme-background);
  opacity: 1;
} */
.main-background {
  background-color: var(--v-theme-background);
}

.appbar-border-bottom {
  border-bottom: 1px solid rgb(var(--v-theme-surface));
}

.vertical-center {
  display: flex;
  align-items: center;
}


/* font */
.poppins-thin {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.poppins-extralight {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.poppins-light {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.poppins-extrabold {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.poppins-black {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.poppins-thin-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.poppins-extralight-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.poppins-light-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.poppins-regular-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.poppins-medium-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.poppins-semibold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.poppins-bold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.poppins-extrabold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.poppins-black-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: italic;
}

/* blog colors */
.category {
  border-color: rgb(var(--v-theme-secondary));
  color: rgb(var(--v-theme-secondary));
  border-radius: 5;
  transition: 0.05s ease-in-out;
}

.category:hover {
  /* border-color: rgb(var(--v-theme-secondary-darken-1)); */
  background-color: rgb(var(--v-theme-secondary));
  color: white;
  display: inline-block;
  line-height: 0.95;
  border-bottom: 2px solid rgba(var(--v-theme-secondary-darken-1), 1);
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}



/* .readmore {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.3);
  border-radius: 5px;
  transition: 0.05s ease-in-out;
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
}

.readmore:hover {
  background-color: rgba(var(--v-theme-tertiaryContainer-lighten-1), 0.6);
  border-bottom: 2px solid rgba(var(--v-theme-tertiaryContainer), 1);
  display: inline-block;
  line-height: 0.95;
} */

.is-btn {
  cursor: pointer;
}

.v-card--link:before {
  background: none;
}


.tag {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.3);
  border-radius: 5;
  transition: 0.05s ease-in-out;
}

.tag:hover {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.6);
  border-bottom: 2px solid rgba(var(--v-theme-secondaryContainer), 1);
  display: inline-block;
  line-height: 0.95;
}
</style>