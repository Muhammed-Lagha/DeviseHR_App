<script setup lang="ts">
import AuthenticatedLayout from '@/components/Layout/AuthenticatedLayout.vue'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isAr = ref(false)
</script>

<template>
  <AuthenticatedLayout>
    <main :dir="isAr == true ? 'rtl' : 'ltr'">
      <div class="max-w-[700px] shadow-md p-6 rounded-md bg-white dark:bg-slate-700">
        <div class="flex items-start sm:items-center mb-4">
          <h1 class="text-4xl flex-1 dark:text-white">{{}}</h1>
          <span class="dark:text-white"> {{ isDark ? 'Dark' : 'Light' }} Mode </span>
        </div>
        <p class="text-md mb-4 dark:text-white">
          {{ isAr ? 'مرحبا بكم في DeviseHR' : 'Welcome to DeviseHR' }}
        </p>
        <div class="flex items-center justify-between">
          <button
            @click="toggleDark()"
            class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
          >
            {{ isDark ? 'Light' : 'Dark' }}
          </button>
          <button
            @click="isAr = !isAr"
            class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
          >
            {{ isAr ? 'English' : 'Arabic' }}
          </button>
        </div>
      </div>
    </main>
  </AuthenticatedLayout>
</template>
