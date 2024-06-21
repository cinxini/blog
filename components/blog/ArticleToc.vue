<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
  links: {
    type: Array,
    nullable: true,
    default: null
  }
})

const openToc = ref(true);
const toggleToc = computed(() => {
    if (openToc.value) {
        return 'block';
    } else {
        return 'none'
    }
})

</script>

<template>
  <v-navigation-drawer
      location="right"
      class=""
      permanent
      app
      floating
      width="250" style="position:fixed; top:0; right:0; overflow-y: auto; "
      variant="plain"
  >
      <div style="padding-top: 50px; text-align: right;">
        <v-list-item>
            <template v-slot:append>
                <v-btn class="pa-0" icon="fa-solid fa-list" size="small" variant="plain" @click="openToc = !openToc"></v-btn>
            </template>
        </v-list-item>
        <div :style="{ display: toggleToc }">
            <v-list class="mr-3">
                <div v-for="h2 in links"  :key="h2.text">
                    <v-list-item density="compact" min-height="20" class="py-0">
                        <v-list-item-title class="toc-h2 poppins-medium"><span class="h2-sharp text-primaryContainer">#</span> {{ h2.text }}</v-list-item-title>
                    </v-list-item>
                    
                    <div v-if="h2.children" class="">
                        <div  v-for="h3 in h2.children" :key="h3.text">
                            <v-list-item density="compact" min-height="20" class="py-0">
                                <v-list-item-title class="toc-h3 poppins-regular">{{ h3.text }}</v-list-item-title>
                            </v-list-item>

                            <div v-if="h3.children">
                                <div  v-for="h4 in h3.children" :key="h4.text">
                                    <v-list-item density="compact" min-height="20" class="py-0" >
                                        <v-list-item-title class="toc-h4 poppins-light">{{ h4.text }}</v-list-item-title>
                                    </v-list-item>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </v-list>

        </div>
        
          
      </div>
  </v-navigation-drawer>
</template>

<style scoped>
.toc-h2 {
    /* font-family: "Menlo", "Meslo LG", monospace; */
    font-size: 14px;
}

/* .h2-sharp {
    color: red;
} */

.toc-h3 {
    font-size: 12px;
}
.toc-h4{
    font-size: 10px;
}
</style>