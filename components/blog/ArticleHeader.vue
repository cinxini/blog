<script setup>
import Category from '@/components/blog/ArticleCategory.vue';
import Tag from '@/components/blog/ArticleTag.vue';
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
            <Category :value="meta.category" :enable-link="true" />
        </div>
        <div class="my-3 text-h3 text-primary">{{ meta.title }}</div>
        <div class="poppins-light text-subtitle-2">{{ meta.description }}</div>
        <FlexBox class="my-1">
            <div class="poppins-regular text-caption">{{ meta.date }}</div> |
            <v-icon icon="fa-solid fa-tag" size="x-small" color="secondary-darken-1"></v-icon>
            <FlexBox class="ga-1 flex-wrap">
                <Tag v-for="tag in meta.tags" :key="tag" :value="tag" :enable-link="true" />
            </FlexBox>
        </FlexBox>
    </v-sheet>
</template>
<style></style>