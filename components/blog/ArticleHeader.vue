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
    <v-sheet class="main-background">
        <div>
            <v-chip label variant="outlined" density="comfortable" size="small"
                color="secondary-lighten-3">{{ meta.category }}</v-chip>
        </div>
        <div class="my-3 text-h4 noto-serif-display-bold text-primary">{{ meta.title }}</div>
        <div class="poppins-light text-subtitle-2">{{ meta.description }}</div>
        <FlexBox class="my-1">
            <div class="poppins-regular text-caption">{{ meta.date }}</div> |
            <v-icon icon="fa-solid fa-tag" size="x-small" color="secondary-lighten-3"></v-icon>
            <FlexBox class="ga-1">
                <div v-for="tag in meta.tags" :key="tag" class="poppins-regular text-caption">#{{ tag }}</div>
            </FlexBox>
        </FlexBox>
    </v-sheet>
</template>



<style></style>