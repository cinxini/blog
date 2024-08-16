<script setup>
</script>

<template>
  <v-sheet>
    <div class="md-style is-normal myh2">
      <slot />
    </div>
  </v-sheet>
</template>

<style lang="scss">
.md-style {
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  background-color: white;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
  }

  blockquote:not(:last-child),
  dl:not(:last-child),
  ol:not(:last-child),
  pre:not(:last-child),
  table:not(:last-child),
  ul:not(:last-child),
  p:not(:last-child) {
    margin-bottom: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(var(--v-theme-baseVariant));
    font-weight: 700;
    line-height: 1.125;
  }

  h1 {
    font-size: 1.9rem;
    margin-bottom: .6em;
  }

  h2 {
    font-size: 1.75em;
    margin-bottom: .5714em;
  }

  h2:not(:first-child) {
    margin-top: 1.1428em;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: .6666em;
  }

  h3:not(:first-child) {
    margin-top: 1.3333em;
  }

  h4 {
    font-size: 1.25em;
    margin-bottom: .8em;
  }

  h5 {
    font-size: 1.125em;
    margin-bottom: .8888em;
  }

  h6 {
    font-size: 1em;
    margin-bottom: 1em;
  }

  // a

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
    color: rgb(var(--v-theme-secondary));
    cursor: pointer;
    text-decoration: none;
    transition-duration: 290ms;
    transition-property: background-color, border-color, color;
  }

  blockquote {
    background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
    border-inline-start: 8px solid rgba(var(--v-theme-secondary), 0.4);
    padding: 1.25em 1.5em;
  }


  pre {
    background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.3);

    code {
      font-size: 14px;
    }
  }

  ul {
    list-style: disc outside;
    margin-inline-start: 2em;
    margin-top: 1em;
  }

  li+li {
    margin-top: .25em;
  }

  ol {
    list-style-position: outside;
    margin-inline-start: 2em;
    margin-top: 1em;
  }

  ol:not([type]) {
    list-style-type: decimal;
  }

  b,
  strong {
    font-weight: bolder;
    color: rgb(var(--v-theme-baseVariant));
  }
}
</style>