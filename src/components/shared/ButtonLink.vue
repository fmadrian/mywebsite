<template>

    <!-- Render a <a> for external links, and a <router-link> for internal links. -->
    <!-- Both elements use the same classes -->
    <router-link v-if="isRouterLink" :class=linkClasses :to=link>{{ label }}</router-link>
    <a v-else :class=linkClasses v-bind:href=link>{{ label }}</a>

</template>
<script setup>
import { ref } from 'vue';


const props = defineProps({
    isRouterLink: {
        type: Boolean,
        value: false
    },
    link: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
});
const linkClasses = ref('block border-2 border-black p-3 font-link font-bold text-lg'
    + ' hover:scale-110 hover:text-white hover:bg-black hover:shadow-2xl'
    + ' transition-all ease-in-out duration-200');

</script>