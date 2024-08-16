<script setup>
import ProjectList from '@/components/ContentList.vue';
import DotLoader from '@/components/items/DotLoader.vue';

import c from '@/constants/posts';

import { computed, onMounted, ref, watch } from 'vue';

const isFetching = ref(false);
const currPage = ref(1);
const count = ref(0);

const numPages = computed(() => {
  if (count.value === 0) return 1;
  return Math.ceil(count.value / c.POSTS_PER_PAGE);
})

const fetchProjects = async (pageNo) => {
  isFetching.value = true;
  let data = null;
  try {
    data = await queryContent('/project')
      .where({ status: 'published' })
      .sort({ 'dates.published': -1 })
      .skip((pageNo - 1) * c.POSTS_PER_PAGE)
      .limit(c.POSTS_PER_PAGE)
      .find();
  } catch (error) {
    console.log('Error:', error)
  } finally {
    isFetching.value = false;
  }
  return data;
}

const { data: projectItems } = useAsyncData('projectList', () => {
  return fetchProjects(currPage.value);
})

const showList = computed(() => {
  if (projectItems.value && projectItems.value.length > 0)
    return true;
  else
    return false;
})



onMounted(async () => {
  if (!projectItems.value) {
    projectItems.value = await fetchProjects(currPage.value);
  }
  count.value = await queryContent('/project').where({ status: 'published' }).count()
})

watch(currPage, async (newPageNo) => {
  projectItems.value = await fetchProjects(newPageNo);
})

</script>

<template>

  <v-container class="w-66 main-container">
    <p class="text-center text-h5">Recent Projects</p>
    <div v-if="isFetching" class="d-flex flex-row justify-center ma-16">
      <DotLoader />
    </div>
    <div v-if="showList">
      <ProjectList :articles="projectItems"></ProjectList>
      <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
        prev-icon="fa-solid fa-caret-left" rounded="lg" color="grey" active-color="primary"></v-pagination>
    </div>
    <p v-else class="text-center">No projects.</p>

  </v-container>


</template>


<style></style>