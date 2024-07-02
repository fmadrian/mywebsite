<template>
    <section class="flex flex-col md:px-36 md:py-24">
        <!-- INTRO -->
        <div class="flex flex-col gap-16">
            <h2 class="font-header font-bold text-6xl sm:text-7xl uppercase">Projects</h2>
            <div class="flex flex-col gap-5">
                <p class="font-body text-2xl">These are some of the personal projects I've worked on.</p>
                <p class="font-body text-lg">Clicking on one will take you to its repository. You can also check my
                    other <a class="underline" v-bind:href=EXTERNAL_URLS.github_repositories.all>repositories</a>.</p>
            </div>
        </div>
        <!-- LIST -->
        <div class="flex flex-col my-10 sm:px-12 py-8 gap-10">
            <!-- ELEMENTS -->
            <ProjectCard v-for="(project, index) in USER_PROJECTS" :project=project :isRightText="index % 2 === 0"
                :key=index />
        </div>

    </section>
</template>
<script setup>
import { EXTERNAL_URLS, USER_PROJECTS } from '../utils/Data';
import ProjectCard from '../components/shared/ProjectCard.vue';
</script>