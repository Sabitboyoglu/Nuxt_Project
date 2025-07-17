<script setup lang="ts">
const icon = computed(() => (isDark.value ? 'lucide:sun' : 'lucide:moon'))
</script>

<template>
  <UButton variant="soft" :icon @click="toggleTheme" />
</template>
