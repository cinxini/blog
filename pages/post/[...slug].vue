<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})
const mdcVars = ref({ name: 'Maxime'});
console.log(blogPost)
</script>

<template>
    <v-container style=" max-width: 800px; min-width: 400px;">
        <div>
            <ContentDoc />
        </div>
        
    </v-container>
</template>

<style scoped>
</style>