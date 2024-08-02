<script setup>
// import ContentList from '@/components/ContentList.vue';
</script>

<template>
  <v-container class="main-container">
    <p class="text-center text-h5 poppins-regular">Articles in Category</p>
    <div class="d-flex flex-row justify-center">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip v-bind="props" class="rounded-s-lg" rounded="0"  :color="isHovering? 'tertiary' : 'base' "
            :variant=" isHovering? 'flat':'tonal'" size="small" label
          >
            <v-icon icon="fa-solid fa-box-archive" size="small" start />
          all</v-chip>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip v-bind="props" class="rounded-0" :color="isHovering? 'tertiary' : 'base' " 
            :variant=" isHovering? 'flat':'tonal'" size="small" label
          >
            <v-icon icon="fa-solid fa-code" size="small" start />
          project</v-chip>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip v-bind="props" class="rounded-e-lg" rounded="0" :color="isHovering? 'tertiary' : 'base' "
            :variant=" isHovering? 'flat':'tonal'" label size="small"
          >
            <v-icon icon="fa-solid fa-quote-right" size="small" start />
            blog
          </v-chip> 
        </template>
      </v-hover>
    </div>

    <!-- <ContentList /> -->
  </v-container>
</template>



<style></style>