<template>
  <!-- <script src="https://giscus.app/client.js"
            data-repo="cinxini/giscus-comment-test"
            data-repo-id="R_kgDOMqAHFg"
            data-category="General"
            data-category-id="DIC_kwDOMqAHFs4CiCH7"
            data-mapping="title"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="noborder_light"
            data-lang="en"
            crossorigin="anonymous"
            async>
        </script> -->

  <!-- <div id="comments" class="giscus"> -->
  <div class="comments-container">
    <Giscus id="comments" repo="cinxini/giscus-comment-test" repoId="R_kgDOMqAHFg" category="General"
      categoryId="DIC_kwDOMqAHFs4CiCH7" mapping="title" term="Welcome to @giscus/vue component!" reactionsEnabled="1"
      emitMetadata="0" inputPosition="top" theme="https://cinxini.github.io/stylesheets/giscus/noborder_light.css"
      lang="en" />
  </div>

</template>

<script lang="ts" setup>
import Giscus from '@giscus/vue';
</script>
<style>
/* .color-box-border-info {
    border - color: red;
} */
#comments::part(iframe) {
  max-width: 640px;
  margin: auto;
  display: flex;
}

.comments-container {
  max-height: 640px;
  overflow-y: scroll;
}
</style>