<script setup>
import FlexBox from '@/components/containers/FlexBox.vue';
import { computed, ref } from 'vue';

const router = useRouter();

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
                        :color="openToc ? 'primary' : 'grey'" @click="openToc = !openToc"></v-btn>
                </template>
            </v-list-item>
            <div :style="{ display: toggleToc }">
                <v-list-item class="ma-3">
                    <template v-slot:append>
                        <FlexBox class="align-center ga-3">
                            <v-icon icon="fa-solid fa-caret-up" @click="router.push('#top')" class="to-top"></v-icon>
                            <!-- <v-icon icon="fa-solid fa-caret-down"></v-icon> -->
                            <v-icon icon="fa-solid fa-comment-dots"></v-icon>
                        </FlexBox>
                    </template>
                </v-list-item>
                <v-list class="mr-3">
                    <div v-for="h2 in links" :key="h2.text">
                        <v-list-item density="compact" min-height="20" class="py-0">
                            <v-list-item-title class="toc-h2 poppins-medium">
                                <span class="h2-sharp text-primary-lighten-1"># </span>
                                <span :class="{ current: h2.id == currentId ? true : false }" class="toc-label">
                                    <a class="" :href="`#${h2.id}`">
                                        {{ h2.text }}
                                    </a>
                                </span>
                            </v-list-item-title>
                        </v-list-item>

                        <div v-if="h2.children" class="">
                            <div v-for="h3 in h2.children" :key="h3.text">
                                <v-list-item density="compact" min-height="20" class="py-0">
                                    <v-list-item-title class="toc-h3 poppins-regular">
                                        <span :class="{ current: h3.id == currentId ? true : false }" class="toc-label">
                                            <a class="" :href="`#${h3.id}`">
                                                {{ h3.text }}
                                            </a>
                                        </span>
                                    </v-list-item-title>
                                </v-list-item>

                                <div v-if="h3.children">
                                    <div v-for="h4 in h3.children" :key="h4.text">
                                        <v-list-item density="compact" min-height="20" class="py-0">
                                            <v-list-item-title class="toc-h4 poppins-light">
                                                <span :class="{ current: h4.id == currentId ? true : false }"
                                                    class="toc-label">
                                                    <a class="" :href="`#${h4.id}`">
                                                        {{ h4.text }}
                                                    </a>
                                                </span>

                                            </v-list-item-title>
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
.to-top{
    color: grey;
    transition: 0.3s ease-in-out;
}

.to-top:hover {
    color: rgb(var(--v-theme-primary));
}

.toc-h2 {
    /* font-family: "Menlo", "Meslo LG", monospace; */
    font-size: 13px;
    font-weight: bold;
}

/* .h2-sharp {
    color: red;
} */

.toc-h3 {
    font-size: 11px;
    font-weight: 600;
}

.toc-h4 {
    font-size: 9px;
    font-weight: 400;
}

.toc-h2 .toc-label a,
.toc-h3 .toc-label a,
.toc-h4 .toc-label a {
    color: rgb(var(--v-theme-surface-variant));
}

.toc-h2 .toc-label.current a,
.toc-h3 .toc-label.current a,
.toc-h4 .toc-label.current a {
    color: rgb(var(--v-theme-tertiary));
    font-weight: bold;
}
</style>