<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})
const mdcVars = ref({ name: 'Maxime'});
console.log(blogPost)
</script>

<template>
    <NavigationDrawer></NavigationDrawer>
    <v-container style=" max-width: 800px; min-width: 400px;">
        <v-sheet >
            <v-container fluid>
                <div>
                    <div>{{ blogPost.dates.published }}</div>
                    <v-chip>{{ blogPost.category }}</v-chip>
                </div>
                <div class="text-h4">{{ blogPost.title }}</div>
                <div class="">{{ blogPost.description }}</div>
                <div class="">
                    <div v-for="tag in blogPost.tags" :key="tag">#{{ tag }}</div>
                </div>
            </v-container>
        </v-sheet>
        <v-sheet>
            <div class="content is-normal">
                <ContentDoc />
            </div>
        </v-sheet>
        
        
    </v-container>
</template>

<style scoped>
</style>