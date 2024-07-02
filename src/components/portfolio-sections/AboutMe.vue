<template>
    <section class="py-20 flex flex-col gap-16">
        <h2 class="font-header font-bold text-6xl sm:text-7xl uppercase">{{ APP_STRINGS.labels.aboutMe }}</h2>
        <div class="flex flex-col-reverse md:flex-row gap-16">
            <div class="flex flex-col gap-16 md:w-3/5">
                <div class="flex flex-col gap-5">
                    <p v-for="paragraph in paragraphs" class="font-body text-xl">{{ paragraph }}
                    </p>
                </div>
                <div class="flex flex-row gap-3">
                    <ButtonLink isRouterLink v-bind:link=APP_ROUTES.projects v-bind:label=APP_STRINGS.labels.projects>
                    </ButtonLink>
                    <ButtonLink v-bind:link=EXTERNAL_URLS.contact v-bind:label=APP_STRINGS.labels.contact></ButtonLink>
                </div>
            </div>
            <img class="aspect-square md:w-2/5 " src="/assets/images/other/photo.webp">
        </div>

    </section>
</template>
<script setup>
import ButtonLink from '../shared/ButtonLink.vue';
import { APP_ROUTES } from '../../utils/AppRoutes';
import { APP_STRINGS, EXTERNAL_URLS } from '../../utils/Data';
import { ref } from 'vue';


const paragraphs = ref([
    'I graduated from Universidad Nacional de Costa Rica with a bachelor’s degree in Information Systems Engineering.',
    'I am fluent in English and Spanish and am currently pursuing a licentiate’s degree with an emphasis on Web Systems Development.',
    'I am persistent, always eager to learn, and dedicated to developing new skills to further my professional growth.',
]);

</script>