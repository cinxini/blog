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
    <v-sheet >
        <div>
            <div>{{ meta.date }}</div>
            <v-chip>{{ meta.category }}</v-chip>
        </div>
        <div class="text-h4">{{ meta.title }}</div>
        <div class="">{{ meta.description }}</div>
        <FlexBox>
            <div v-for="tag in meta.tags" :key="tag">#{{ tag }}</div>
        </FlexBox>
    </v-sheet>
</template>
  

  
  <style>
  
  </style>