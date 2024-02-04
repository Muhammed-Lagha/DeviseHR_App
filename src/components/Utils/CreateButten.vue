<script setup lang="ts">
import ArrowIcon from '@/components/icons/TopBar/P&A/ArrowIcon.vue'
import PlusIcon from '@/components/icons/TopBar/P&A/PlusIcon.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const dropdownOpen = ref(false)
const trigger = ref(null as any)
const dropdown = ref(null as any)

// close on click outside
const clickHandler = ({ target }: { target: any }) => {
  if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target))
    return
  dropdownOpen.value = false
}
// close if the esc key is pressed
const keyHandler = ({ keyCode }: { keyCode: number }) => {
  if (!dropdownOpen.value || keyCode !== 27) return
  dropdownOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})
</script>

<template>
  <button
    class="w-12 h-8 flex items-center justify-center p-1 text-gray-600 border-[1px] border-gray-200 rounded-md focus:outline-none bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 dark:border-gray-500 dark:hover:border-gray-200"
  >
    <PlusIcon />
    <ArrowIcon />
  </button>
</template>
