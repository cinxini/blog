<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-icon color="base" icon="fa-solid fa-hashtag" size="large"></v-icon>
    </template>
    <p v-if="match.key === 'sections.content'"><a class="match-link"
        :href="`${path}${content.id}`">{{ content.name }}</a>
    </p>
    <p v-else><a class="match-link"
        :href="`${path}#top`">{{ match.key.charAt(0).toUpperCase() + match.key.slice(1) }}</a>
    </p>
    <HighLightBox :match="match" :match-id="`title-${matchId}`" />


  </v-list-item>
</template>

<script setup>
import HighLightBox from '@/components/items/HighLightBox.vue';

const props = defineProps({
  content: { type: Object, required: false },
  match: Object,
  matchId: String,
  path: String
})
</script>

<style scoped>
a.match-link {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 1em;
}

a.match-link:hover {
  text-decoration: underline solid rgba(var(--v-theme-primary-lighten-1), 0.3) 4px;
  color: rgb(var(--v-theme-primary))
}
</style>
