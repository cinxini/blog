<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
})

console.log(blogPost)
</script>

<template>
    <pre>{{ blogPost }}</pre>
</template>

<style scoped>
</style>