<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isAr = ref(false)
const toggleAr = () => (isAr.value = !isAr.value)
const en = {
  'log in': 'Log In'
}
const ar = {
  'log in': 'تسجيل الدخول'
}
</script>

<template>
  <main
    :dir="isAr ? 'rtl' : 'ltr'"
    class="pt-8 flex items-start justify-center bg-slate-700 dark:bg-white min-h-screen"
  >
    <div class="max-w-[700px] shadow-md p-6 rounded-md bg-white dark:bg-slate-700">
      <div class="flex items-start sm:items-center mb-4">
        <h1 class="text-4xl flex-1 dark:text-white">{{ isAr ? ar['log in'] : en['log in'] }}</h1>
        <span class="dark:text-white"> {{ isDark ? 'Dark' : 'Light' }} Mode </span>
      </div>
      <p class="text-md mb-4 dark:text-white">
        In this tutorial we will be learning how to enable dark mode for your tailwind website/app.
        Also, we will show how we can create a toggle to change between a light & dark theme.
      </p>
      <button
        @click="toggleDark()"
        class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
      >
        Learn More!
      </button>
      <button
        @click="toggleAr()"
        class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
      >
        toggle language
      </button>
    </div>
  </main>
</template>
