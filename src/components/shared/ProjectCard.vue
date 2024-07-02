<template>
    <!-- ELEMENTS -->
    <div class="p-8 border-2 border-black border-opacity-25  rounded-lg 
            hover:shadow-2xl transition-all ease-in-out duration-200">
        <a v-bind:href=project.link>
            <div
                :class="`flex lg:max-h-[270px] flex-col-reverse ${isRightText ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:justify-between`">
                <div class="flex flex-col gap-5">
                    <h3 class="font-header font-bold text-3xl uppercase">{{ project.name }}</h3>
                    <p class="font-body text-lg font-medium">{{ project.description }} </p>
                    <Divider classes="border-gray-400" />
                    <p class="font-body text-base overflow-auto">{{ project.reason }} </p>
                </div>
                <img class="aspect-square w-[320px] h-[270px] place-self-center" v-bind:src=project.image>

            </div>
        </a>
    </div>
</template>
<script setup>
import Divider from '../shared/Divider.vue';
const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    isRightText: {
        type: Boolean,
        default: false
    }
})
</script>