<script setup>

const props = defineProps({
  links: {
    type: Array,
    nullable: true,
    default: null
  }
})

</script>

<template>
  <v-navigation-drawer
      location="right"
      class="text-primary"
      permanent
      app
      width="200" style="position:fixed; top:0; right:0; overflow-y:scroll; "
  >
      <div style="padding-top: 50px; text-align: right;">
        <v-list>
            <div v-for="h2 in links"  :key="h2.text">
                <v-list-item>
                    <v-list-item-title class="toc-h2"><span>#</span> {{ h2.text }}</v-list-item-title>
                </v-list-item>

                <div v-if="h2.children" v-for="h3 in h2.children" :key="h3.text">
                    <v-list-item>
                        <v-list-item-title class="toc-h3">{{ h3.text }}</v-list-item-title>
                    </v-list-item>

                    <div v-if="h3.children" v-for="h4 in h3.children" :key="h4.text">
                        <v-list-item>
                            <v-list-item-title class="toc-h4">{{ h4.text }}</v-list-item-title>
                        </v-list-item>
                    </div>
                </div>
                <!-- <v-list-group v-else >
                    <template v-slot:activator="{ props }">
                        <v-list-item  vbind="props" :title="h2.text" >
                            <template v-slot:prepend> # </template>
                        </v-list-item>
                    </template>
                    <div v-for="h3 in h2.children"  :key="h3.text">
                        <v-list-item  :title="h3.text"></v-list-item>
                    </div>

                </v-list-group> -->
            </div>
            <!-- <div v-if="!h2.children">
                <v-list-item v-for="h2 in links" :title="h2.text">
                    <template v-slot:prepend> # </template>
                </v-list-item>
            </div>  -->
            <!-- <div v-else>
            k -->
                  <!-- <v-list-item v-for="h3 in h2.children" :key="h3.text" :title="h3.text">
                    <div v-if="h3.children">
                        <v-list-item v-for="h4 in h3.children" :key="h4.text" :title="h4.text"></v-list-item>
                    </div>
                  </v-list-item> -->
            <!-- </div> -->
          
        </v-list>
          
      </div>
  </v-navigation-drawer>
</template>

<style scoped>
.toc-h2 {
    font-family: "Menlo", "Meslo LG", monospace;
    font-size: 14px;
    color: blue;
}

.toc-h3 {
    font-size: 13px;
}
.toc-h4{
    font-size: 11px;
}
</style>