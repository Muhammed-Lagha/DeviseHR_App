<script setup lang="ts">
import LanguageSwitcher from '@/components/Utils/LanguageSwitcher.vue'
import CreateButton from '@/components/Utils/CreateButten.vue'
import Notifications from '@/components/Utils/DropdownNotifications.vue'
import Help from '@/components/Utils/DropdownHelp.vue'
import ThemeToggle from '@/components/Utils/ThemeToggle.vue'
import UserMenu from '@/components/Utils/DropdownProfile.vue'

defineProps<{
  sidebarOpen: boolean
}>()
</script>
<template>
  <header
    class="sticky top-0 bg-white dark:bg-[#0F0F0F] border-b border-slate-200 dark:border-gray-700 z-30"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            class="text-gray-500 hover:text-gray-600 lg:hidden"
            @click.stop="$emit('toggle-sidebar')"
            aria-controls="sidebar"
            :aria-expanded="sidebarOpen"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <div>
            <!-- language button -->
            <LanguageSwitcher align="right" />
          </div>
          <!-- Divider -->
          <hr class="w-px h-6 bg-gray-200 dark:bg-gray-700 border-none" />
          <!-- Create New Button -->
          <CreateButton align="right" />
          <!-- Notifications -->
          <Notifications align="right" />
          <!-- Help Menu -->
          <Help align="right" />
          <!-- Theme Toggle -->
          <ThemeToggle />
          <!-- Divider -->
          <hr class="w-px h-6 bg-gray-200 dark:bg-gray-700 border-none" />
          <!-- Profile dropdown -->
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>
