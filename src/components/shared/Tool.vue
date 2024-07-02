<template>
    <div class="border-2 border-black rounded-full hover:shadow-xl transition-shadow ease-in-out duration-200">
        <span class="block px-8 py-3 font-body text-lg">{{ tool.name }}</span>
    </div>
</template>
<script setup>
const props = defineProps({
    tool: {
        type: Object,
        required: true
    }
});

</script>