<script setup>
</script>

<template>
  <v-sheet>
    <div class="content is-normal myh2">
      <slot />
    </div>
  </v-sheet>
</template>

<style lang="scss">
.content {
  h2 a {
    color: rgb(var(--v-theme-tertiary-darken-1));
  }

  h3 a {
    color: rgb(var(--v-theme-tertiary-darken-1))
  }

  h4 a {

    color: rgb(var(--v-theme-tertiary-darken-4))
  }

  li::marker {
    color: rgb(var(--v-theme-primary-darken-1));
  }

  a {
    color: rgb(var(--v-theme-secondary))
  }
}
</style>