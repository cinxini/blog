<script setup>
</script>

<template>
  <div class="loader">
  </div>
</template>



<style scoped>
/* HTML: <div class="loader"></div> 
https://css-loaders.com/dots/
*/
.loader {
  width: 150px;
  height: 50px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, rgb(var(--v-theme-primary)) 90%, #0000);
  background:
    no-repeat radial-gradient(circle closest-side, rgb(var(--v-theme-primary)) 90%, #0000) 0% 50%,
    no-repeat radial-gradient(circle closest-side, rgb(var(--v-theme-primary)) 90%, #0000) 50% 50%,
    no-repeat radial-gradient(circle closest-side, rgb(var(--v-theme-primary)) 90%, #0000) 100% 50%;
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