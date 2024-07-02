<template>
    <section class="py-20 flex flex-col gap-16">
        <h2 class="font-header font-bold text-6xl sm:text-7xl uppercase">{{ APP_STRINGS.labels.tools }}</h2>
        <p class="font-body text-2xl">This is a list of tools I frequently use:</p>
        <!-- TOOLS -->
        <div class="flex flex-row gap-5 flex-wrap">
            <Tool v-for="(tool, index) in USER_TOOLS" :tool="tool" :key="index" />
        </div>
    </section>
</template>
<script setup>
import { USER_TOOLS, APP_STRINGS } from '../../utils/Data';
import Tool from '../shared/Tool.vue';
</script>