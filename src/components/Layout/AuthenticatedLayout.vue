<script setup lang="ts">
import SideBar from '@/components/Layout/Navigation/SideBar.vue'
import Header from '@/components/Layout/Navigation/HeaderBar.vue'

import { useSidebar } from '@/Hooks/useSidebar'

const { isOpen } = useSidebar()

const locales = {
  // LOCALE: [Full Name for Front-End in Native Language, Country Flag Code],
  en: ['English', 'us'],
  ar: ['العربية', 'arab']
}
</script>

<template>
  <div class="flex h-screen bg-white font-roboto">
    <SideBar :sidebarOpen="isOpen" @close-sidebar="isOpen = false" />
    <div class="min-h-screen flex-1 flex flex-col overflow-hidden">
      <Header :sidebarOpen="isOpen" @toggle-sidebar="isOpen = !isOpen" />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-slate-800">
        <div class="container bg-white dark:bg-slate-800 mx-auto px-6 py-4">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
