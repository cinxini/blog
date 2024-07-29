<script setup>
import ProjectList from '@/components/project/ProjectList.vue';
import { ref, onMounted, computed } from 'vue';

const fetchProjects = async () => {
  let data = null;
  data = await queryContent('/project').sort({ 'dates.published': -1 }).find();
  console.log
  return data;
}
// const projectItems = ref(null);
const { data: projectItems } = useAsyncData('projectList', () => {
  return fetchProjects();
})

const showList = computed(() => {
  if (projectItems.value && projectItems.value.length > 0)
    return true;
  else
    return false;
})

onMounted(async () => {
  console.log(projectItems.value)
  if (!projectItems.value) {
    projectItems.value = fetchProjects();
  }
})


</script>

<template>
  <v-container class="main-container">
    <p class="text-center text-h5 poppins-regular">Projects</p>
    <div v-if="showList">
      <ProjectList :projects="projectItems"></ProjectList>
    </div>
  </v-container>
</template>


<style></style>