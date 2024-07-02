<template>
    <section class="flex flex-col -mt-20 gap-20 place-content-center items-center min-h-screen">
        <span class="block font-header text-6xl">404</span>
        <span class="block text-center font-body text-4xl">The requested URL was not found. </span>
        <ButtonLink isRouterLink :link=APP_ROUTES.home :label="'Go back to the main page.'" />
    </section>

</template>
<script setup>
import { APP_ROUTES } from '../utils/AppRoutes';
import ButtonLink from '../components/shared/ButtonLink.vue';
</script>