<template>
    <hr :class=classes>
</template>
<script setup>
const props = defineProps({
    classes: {
        type: String,
        default: 'border-gray-400'
    }
})
</script>