<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <UContainer class="text-primary-500 select-none">
    {{ label }}
  </UContainer>
</template>
