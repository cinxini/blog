<script setup>
import FlexBox from '@/components/containers/FlexBox.vue';

const props = defineProps({
    meta:{
        type: Object,
        nullable: true,
        default: null
    }
})
</script>

<template>
    <v-sheet v-if="meta">
        <FlexBox>
            <div class="poppins-light text-subtitle-1">{{ meta.date　}}</div>
            <v-chip label variant="outlined" density="comfortable" size="small">{{ meta.category }}</v-chip>
        </FlexBox>
        <div class="text-h4 noto-serif-display-bold">{{ meta.title }}</div>
        <div class="">{{ meta.description }}</div>
        <FlexBox class="">
            <div v-for="tag in meta.tags" :key="tag" class="poppins-regular text-caption">#{{ tag }}</div>
        </FlexBox>
    </v-sheet>
</template>
  
  
  
  <style>
  
  </style>