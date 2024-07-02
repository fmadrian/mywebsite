<template>
    <header class="sticky top-0 border-2 border-black bg-[#dadada]">
        <div class="flex justify-stretch sm:justify-between items-stretch">
            <router-link class="block  place-content-center border-r-2 p-5 border-black hover:bg-black hover:text-white
            font-link uppercase text-lg font-extrabold transition-all ease-in-out duration-200" :to="APP_ROUTES.home">
                {{ APP_STRINGS.info.fullName }}
            </router-link>

            <div class="flex flex-col grow sm:grow-0 items-stretch sm:flex-row border-black border-r-2 sm:border-r-0">
                <a class="flex place-content-center sm:p-5 border-black border-b-2 sm:border-b-0 sm:border-l-2 sm:border-r-2 hover:bg-black hover:text-white transition-all ease-in-out duration-200"
                    v-bind:href=EXTERNAL_URLS.github>
                    <i class="text-xl bi bi-github"></i>
                </a>
                <a class="flex place-content-center sm:p-5 border-black border-b-2 sm:border-b-0 sm:border-r-2 hover:bg-black hover:text-white transition-all ease-in-out duration-200"
                    v-bind:href=EXTERNAL_URLS.linkedin>
                    <i class="text-xl bi bi-linkedin"></i>
                </a>
                <a class="flex place-content-center sm:p-5 border-black border-b-2 sm:border-b-0 sm:border-r-2 hover:bg-black hover:text-white uppercase font-link font-semibold text-base transition-all ease-in-out duration-200"
                    v-bind:href=EXTERNAL_URLS.about>
                    {{ APP_STRINGS.labels.aboutMe }}
                </a>
                <router-link
                    class="flex place-content-center sm:p-5 hover:bg-black hover:text-white uppercase font-link font-semibold text-base transition-all ease-in-out duration-200"
                    :to="APP_ROUTES.projects">
                    {{ APP_STRINGS.labels.projects }}
                </router-link>
            </div>
        </div>
    </header>
</template>
<script setup>
import { APP_STRINGS, EXTERNAL_URLS } from '../../utils/Data';
import { APP_ROUTES } from '../../utils/AppRoutes';

</script>