<script setup>
import FlexBox from '@/components/containers/FlexBox.vue';
import { computed, ref } from 'vue';
const props = defineProps({
    links: {
        type: Array,
        nullable: true,
        default: null
    },
    currentId: {
        type: String,
        default: null
    }
})

const openToc = ref(true);
const toggleToc = computed(() => {
    console.log(props.links)
    if (openToc.value) {
        return 'block';
    } else {
        return 'none'
    }
})



</script>

<template>
    <v-navigation-drawer location="right" permanent app floating width="250"
        style="position:fixed; top:0; right:0; overflow-y: auto; " variant="plain" class="main-background">
        <div style="padding-top: 50px; text-align: right;">
            <v-list-item>
                <template v-slot:append>
                    <v-btn class="pa-0" icon="fa-solid fa-list" size="small" variant="plain"
                        @click="openToc = !openToc"></v-btn>
                </template>
            </v-list-item>
            <div :style="{ display: toggleToc }">
                <v-list-item class="ma-3">
                    <template v-slot:append>
                        <FlexBox class="align-center ga-3">
                            <v-icon icon="fa-solid fa-caret-up"></v-icon>
                            <!-- <v-icon icon="fa-solid fa-caret-down"></v-icon> -->
                            <v-icon icon="fa-solid fa-comment-dots"></v-icon>
                        </FlexBox>
                    </template>
                </v-list-item>
                <v-list class="mr-3">
                    <div v-for="h2 in links" :key="h2.text">
                        <v-list-item density="compact" min-height="20" class="py-0">
                            <v-list-item-title class="toc-h2 poppins-medium">
                                <span class="h2-sharp text-primary"># </span>
                                <span
                                    :class="{ 'text-tertiary': h2.id == currentId ? true : false, 'font-weight-bold': h2.id == currentId ? true : false }">{{ h2.text }}</span>
                            </v-list-item-title>
                        </v-list-item>

                        <div v-if="h2.children" class="">
                            <div v-for="h3 in h2.children" :key="h3.text">
                                <v-list-item density="compact" min-height="20" class="py-0">
                                    <v-list-item-title class="toc-h3 poppins-regular"><span
                                            :class="{ 'text-tertiary': h3.id == currentId ? true : false, 'font-weight-bold': h3.id == currentId ? true : false }">{{ h3.text }}</span></v-list-item-title>
                                </v-list-item>

                                <div v-if="h3.children">
                                    <div v-for="h4 in h3.children" :key="h4.text">
                                        <v-list-item density="compact" min-height="20" class="py-0">
                                            <v-list-item-title
                                                class="toc-h4 poppins-light">{{ h4.text }}</v-list-item-title>
                                        </v-list-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </v-list>

            </div>


        </div>
    </v-navigation-drawer>
</template>

<style scoped>
.toc-h2 {
    /* font-family: "Menlo", "Meslo LG", monospace; */
    font-size: 13px;
}

/* .h2-sharp {
    color: red;
} */

.toc-h3 {
    font-size: 11px;
}

.toc-h4 {
    font-size: 9px;
}
</style>