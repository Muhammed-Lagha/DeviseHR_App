<script setup lang="ts">
import { ref } from 'vue'

import SearchIcon from '@/components/icons/TopBar/Search.vue'
import SearchModal from '@/components/Utils/ModalSearch.vue'
import CreateButton from '@/components/Utils/CreateButten.vue'
import Notifications from '@/components/Utils/DropdownNotifications.vue'
import Help from '@/components/Utils/DropdownHelp.vue'
import ThemeToggle from '@/components/Utils/ThemeToggle.vue'
import UserMenu from '@/components/Utils/DropdownProfile.vue'

defineProps<{
  sidebarOpen: boolean
}>()
const searchModalOpen = ref(false)
</script>
<template>
  <header
    class="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            class="text-slate-500 hover:text-slate-600 lg:hidden"
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
            <button
              class="w-8 h-8 flex items-center justify-center p-1 text-gray-600 border-[1px] border-gray-200 rounded-md focus:outline-none bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 dark:border-gray-500 dark:hover:border-gray-200 ml-3"
              :class="{ 'bg-slate-200': searchModalOpen }"
              @click.stop="searchModalOpen = true"
              aria-controls="search-modal"
            >
              <span class="sr-only">Search</span>
              <SearchIcon class="w-4 h-4" />
            </button>
            <SearchModal
              id="search-modal"
              searchId="search"
              :modalOpen="searchModalOpen"
              @open-modal="searchModalOpen = true"
              @close-modal="searchModalOpen = false"
            />
          </div>
          <!-- Divider -->
          <hr class="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
          <!-- Create New Button -->
          <CreateButton />
          <!-- Notifications -->
          <Notifications align="right" />
          <!-- Help Menu -->
          <Help align="right" />
          <!-- Theme Toggle -->
          <ThemeToggle />
          <!-- Divider -->
          <hr class="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
          <!-- Profile dropdown -->
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>
