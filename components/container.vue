<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <UContainer>
    {{ label }}
  </UContainer>
</template>
