<script setup>
import { computed } from 'vue';

const props = defineProps({
  links: {
    type: Array,
    nullable: true,
    default: null
  }
})
const processToc = (links) => {
    for (const link of links){
        console.log(link)
    }
}
processToc(props.links)
const tocs = computed(() => {
    processToc(props.links)
})


console.log(tocs)
</script>

<template>
  <v-navigation-drawer
      location="right"
      class="text-primary"
      permanent
      app
      width="200" style="position:fixed; top:0; right:0; overflow-y:scroll; "
  >
      <div style="padding-top: 50px;">
          <v-list-item v-for="link in links" :title="link.text" :key="link.text">
              <div v-if="link.children">
                  <v-list-item v-for="childLink in link.children" :key="childLink.text" :title="childLink.text"></v-list-item>
              </div>
          </v-list-item>
      </div>
  </v-navigation-drawer>
</template>

<style>

</style>