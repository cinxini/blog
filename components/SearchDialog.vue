<script setup>
import { ref } from 'vue';

const searchTerm = ref('')
const isProcessing = ref(false);
const searchResults = ref(null);

const fields = ['body']
const terms = ref(null)
async function createQueryConds(terms) {

  const query = { $or: [] }
  terms.forEach((term) => {
    const subQuery = { $or: [] };
    fields.forEach((field) => {
      const cond = {}
      cond[field] = { $icontains: term }
      subQuery.$or.push(cond)
    })
    query.$or.push(subQuery)
  })
  console.log(query)
  return query
}

async function searchApp() {
  isProcessing.value = true;
  terms.value = searchTerm.value.split(' ');
  console.log(terms.value)
  try {
    const queryConds = await createQueryConds(terms.value)
    // const data = await queryContent('/blog')
    //   // .only(['title', 'description'])
    //   .where(queryConds)
    //   .find()
    const data = await searchContent(searchTerm.value)
    if (data) {
      searchResults.value = data;
    } else {
      searchResults.value = null;
    }
  } catch (error) {
    console.log('error:::', error)
  } finally {
    isProcessing.value = false
  }
  // const results = await searchContent(search);
  // searchResults.value = results;
}

// watch(() => props.showDialog, (newval) => {
//   console.log('search', newval)
//   open.value = newval;
// })
</script>
<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <!-- <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn> -->
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-btn v-bind="{ ...activatorProps, ...props }" class="ma-2 pa-0" icon="fa-solid fa-magnifying-glass"
            size="small" :color="isHovering ? 'primary' : 'baseColor'"></v-btn>
        </template>
      </v-hover>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-list-item class="px-4">
          <v-text-field v-model="searchTerm" label="Search" base-color="baseColor" color="primary" variant="plain"
            @update:modelValue="searchApp">
            <template v-slot:prepend>
              <v-icon color="primary" icon="fa-solid fa-magnifying-glass"></v-icon>
            </template>
          </v-text-field>
        </v-list-item>
        <v-divider class="my-0" color="baseColor"></v-divider>
        <v-card-text>
          <pre>{{ terms }}</pre>
          <pre v-if="searchResults">{{ searchResults }}</pre>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
  <!-- <v-card>
    <v-list-item class="px-4">
      <v-text-field v-model="search" label="Search" base-color="baseColor" color="primary" variant="plain"
        @update:modelValue="searchApp">
        <template v-slot:prepend>
          <v-icon color="primary" icon="fa-solid fa-magnifying-glass"></v-icon>
        </template>
      </v-text-field>
    </v-list-item>
    <v-divider class="my-0" color="baseColor"></v-divider>
    <v-card-text>
      <pre v-if="searchResults">{{ searchResults }}</pre>
    </v-card-text>
  </v-card> -->
</template>



<style></style>