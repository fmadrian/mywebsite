<!-- src/App.vue -->
<template>
    <div class="container bg-gradient-to-t from-[#dadada] to-white min-w-full h-full">
        <app-header />
        <main class="p-3 sm:p-8">
            <router-view></router-view>
        </main>
        <app-footer />
    </div>
</template>

<script setup>
import AppHeader from './components/app-sections/AppHeader.vue';
import AppFooter from './components/app-sections/AppFooter.vue';
</script>