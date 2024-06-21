<script setup>
import FlexBox from '@/components/containers/FlexBox.vue';

const props = defineProps({
    meta: {
        type: Object,
        nullable: true,
        default: null
    }
})
</script>

<template>
    <v-sheet>
        <div>
            <v-chip label variant="outlined" density="comfortable" size="small" color="secondary">{{ meta.category }}</v-chip>
        </div>
        <div class="my-3 text-h4 noto-serif-display-bold text-primary-lighten-3">{{ meta.title }}</div>
        <div class="poppins-regular-italic">{{ meta.description }}</div>
        <FlexBox class="my-1">
            <div class="poppins-regular text-caption">{{ meta.date }}</div> | 
            <v-icon icon="fa-solid fa-tag" size="x-small"></v-icon>
            <div v-for="tag in meta.tags" :key="tag" class="poppins-regular text-caption">#{{ tag }}</div>
        </FlexBox>
    </v-sheet>
</template>
  

  
  <style>
  
  </style>