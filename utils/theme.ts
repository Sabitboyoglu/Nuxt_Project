export const isDark = computed(() => useColorMode().value === 'dark')

export function toggleTheme() {
  const colorMode = useColorMode()
  colorMode.value = isDark.value ? 'light' : 'dark'
}
