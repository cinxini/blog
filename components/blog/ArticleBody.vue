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
    color: rgb(var(--v-theme-tertiary));
  }

  h3 a {
    color: rgb(var(--v-theme-tertiary-darken-2))
  }

  h4 a {

    color: rgb(var(--v-theme-tertiary-darken-4))
  }

  li::marker {
    color: rgb(var(--v-theme-primary-darken-2));
  }

  a {
    color: rgb(var(--v-theme-secondary))
  }

  blockquote {
    background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
    border-inline-start: 8px solid rgba(var(--v-theme-secondary), 0.4);
    // padding: var(--bulma-content-blockquote-padding);
  }


  pre {
    background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.3);

    // code {
    //   font-size: 14px;
    // }
  }
}
</style>