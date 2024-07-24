<template>
  <div class="codeblock">
    <div class="code__header">
      <div class="code__header_filename">{{ filename }}</div>
      <div class="code__header_lang">{{ language }}</div>
    </div>
    <div class="code__body">
      <v-icon v-if="!isCopied" icon="fa-regular fa-paste" class="copy" @click="copyToClipboard"></v-icon>
      <v-icon v-else icon="fa-solid fa-check" class="copied"></v-icon>
      <pre :class="$props.class"><slot /></pre>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
const { copy } = useClipboard()
const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
const isCopied = ref(false);

const copyToClipboard = () => {
  isCopied.value = true;
  console.log(props.class)
  setTimeout(() => {
    isCopied.value = false;
  }, 1000);
}
</script>

<style lang="scss">
pre code .line {
  display: block;
}

.codeblock{
  margin-top: 15px;
  margin-bottom: 15px;
}
.code__header {
  position: relative;
  font-family: monospace, monospace;
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.75);
  padding: 5px 22px;
  border-radius: 0px 0px 0px 0px;
}

.code__header .code__header_filename {
  /* color: rgb(var(--v-theme-surface-variant)); */
  color: rgb(var(--v-theme-secondary-darken-1));
  font-weight: 300;
}

.code__header .code__header_lang{
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: rgba(var(--v-theme-secondaryContainer), 0.4);
  padding: 5px 10px;
  border-radius: 10px 0px 0px 0px;
  color: rgb(var(--v-theme-secondary-darken-2));
  font-weight: bold;
}

.code__body{
  position: relative;
  border-top: 3px solid rgba(var(--v-theme-secondaryContainer), 0.4);
}

.code__body .copy {
  position: absolute;
  right: 0;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  color: rgb(var(--v-theme-secondary-darken-2));
}

.code__body .copy:hover {
  color: rgb(var(--v-theme-secondary));
}

.code__body .copied {
  position: absolute;
  right: 0;
  margin: 10px;
  transition: all 1s ease-out;
  color: rgb(var(--v-theme-secondary-darken-2));
}

.code__body .copied:hover {
  color: rgb(var(--v-theme-secondary));
}

.code__body {
  pre {
    padding: .75rem 0 .75rem 0;

    code {
      display: inline-block;
      width: 100%;
    }

    .line{
      padding: 0 .75rem;
      line-height: 1.6;

      &.highlight,
      &.highlighted {
        background-color: rgba(var(--v-theme-tertiaryContainer), 0.12);
      }

      &.highlight:hover,
      &.highlighted:hover {
        background-color: rgba(var(--v-theme-tertiaryContainer), 0.25);
      }

      &::before {
        content: attr(line);
        padding-right: 1.25rem;
        display: inline-block;
        opacity: 0.8;
        color: rgb(var(--v-theme-secondary-darken-1));
      }
    }

    .line span {
      background-color: transparent !important;
    }
  }
}

</style>
