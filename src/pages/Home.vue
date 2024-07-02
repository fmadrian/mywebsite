<template>
    <div class="md:px-36 md:py-24">
        <section class="pt-2 pb-20 flex flex-col gap-8">
            <h1 class="font-header font-semibold text-7xl sm:text-8xl">{{ APP_STRINGS.info.fullName }}</h1>
            <p class="font-body text-2xl">Hi! My name is Adrián and this is my personal website.</p>
        </section>
        <Divider />
        <AboutMe id="about" />
        <Divider />
        <Contact id="contact" />
        <Divider />
        <Tools id="tools" />
    </div>
</template>
<script setup>
import { APP_STRINGS } from '../utils/Data';
import AboutMe from '../components/portfolio-sections/AboutMe.vue';
import Divider from '../components/shared/Divider.vue';
import Contact from '../components/portfolio-sections/Contact.vue';
import Tools from '../components/portfolio-sections/Tools.vue';

</script>
