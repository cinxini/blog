<template>
  <div class="codeblock">
    <div class="codeblock__body" style="background-color: cadetblue;">
      <div class="codeblock__script" style="background-color: beige;">
        <pre :class="$props.class">
          <slot style="background-color: antiquewhite;" />
        </pre>
      </div>
    </div>

  </div>

  <pre :class="$props.class">
    <slot style="background-color: antiquewhite;" />
  </pre>
</template>

<script setup lang="ts">
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
console.log(props.class)
console.log(props.code)
</script>

<style lang="scss">
.content .codeblock .codeblock__body .codeblock__script {
  margin: 0em 0em;
  padding: 0em 0em;

  pre {
    margin: 0;
    padding: 0em 0em;
    background-color: rgb(255, 195, 205);
  }

  pre code {
    display: block;
    background-color: red;
  }

  pre code .line {
    display: block;
    background-color: aliceblue;
  }

  pre code ::after {
    background-color: yellowgreen;
  }
}
</style>
