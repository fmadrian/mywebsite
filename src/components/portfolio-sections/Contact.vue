<template>
    <section class="py-20 flex flex-col gap-16">
        <h2 class="font-header font-bold text-6xl sm:text-7xl uppercase break-words">{{ APP_STRINGS.labels.contact }}
        </h2>
        <div class="flex flex-col gap-5">
            <p class="font-body text-2xl">You can find me on <a class="underline"
                    v-bind:href=EXTERNAL_URLS.github>Github</a>, <a class="underline"
                    v-bind:href=EXTERNAL_URLS.linkedin>LinkedIn</a>
                or you can send me an <a class="underline" v-bind:href=EXTERNAL_URLS.email>email</a>.</p>
        </div>
    </section>
</template>
<script setup>
import { APP_STRINGS, EXTERNAL_URLS } from '../../utils/Data';
</script>