<template>
  <v-app>
    <v-app-bar :elevation="0" height="50" class="appbar-border-bottom" color="background">
      <v-row no-gutters>
        <v-col cols="2" class="d-flex flex-row">
          <div class="vertical-center ma-4">
            <v-img :width="120" aspect-ratio="16/9" cover src="@/assets/images/logo.png"></v-img>
          </div>

        </v-col>
        <v-col class="d-flex justify-center ">
        </v-col>
        <v-col cols="2" class="d-flex flex-row-reverse">
          <div class="vertical-center ">
            <v-btn class="ma-2" color="primary" to="/">home</v-btn>
            <v-btn class="ma-2" color="primary" to="/about">about</v-btn>
            <v-btn class="ma-2" color="primary" to="/projects">projects</v-btn>
            <v-btn class="ma-2" color="primary" to="/blogs">blog</v-btn>
            <v-btn class="ma-2 pa-0" icon="fa-solid fa-magnifying-glass" size="small"></v-btn>
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
head {
  font-family: "Poppins", sans-serif;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.web-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  color: rgb(var(--v-base-color-darker));
}

.web-title .dot {
  color: rgb(var(--v-theme-primary));
  font-size: 1.8em;
}

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
.poppins {
  font-family: "Poppins", sans-serif;
}

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

.main-container {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

/* HTML: <div class="loader"></div> 
https://css-loaders.com/dots/
*/
.loader {
  width: 150px;
  height: 50px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, rgb(var(--v-theme-primary)) 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l3 1s infinite linear;
  border-width: 0px;
}

@keyframes l3 {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%
  }

  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%
  }

  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%
  }

  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%
  }
}
</style>