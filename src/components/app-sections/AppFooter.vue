<template>
    <footer class="px-8 sm:px-24 flex flex-col gap-6">

        <hr class="border-black">
        <div class="sm:self-left flex flex-wrap gap-6">
            <router-link :class=linkClasses :to=APP_ROUTES.projects>{{ APP_STRINGS.labels.projects
                }}</router-link>
            <a :class=linkClasses v-bind:href=EXTERNAL_URLS.about>{{ APP_STRINGS.labels.aboutMe }}</a>
            <a :class=linkClasses v-bind:href=EXTERNAL_URLS.contact>{{ APP_STRINGS.labels.contact }}</a>
        </div>
        <a class="font-link font-bold block" v-bind:href=EXTERNAL_URLS.repo>{{ APP_STRINGS.info.fullName }}</a>

    </footer>
</template>
<script setup>
import { ref } from 'vue';
import { APP_ROUTES } from '../../utils/AppRoutes';
import { APP_STRINGS, EXTERNAL_URLS } from '../../utils/Data';

const linkClasses = ref('font-link text-lg underline uppercase'
    + ' hover:scale-105 transition-all ease-in-out duration-200'
);

</script>