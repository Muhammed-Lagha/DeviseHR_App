<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '@/Hooks/useSidebar'
import { RouterLink } from 'vue-router'
import SearchIcon from '@/components/icons/TopBar/Search.vue'
import BellIcon from '@/components/icons/TopBar/BellIcon.vue'
import PlusIcon from '@/components/icons/TopBar/P&A/PlusIcon.vue'
import ArrowIcon from '@/components/icons/TopBar/P&A/ArrowIcon.vue'
import MoonIcon from '@/components/icons/TopBar/MoonIcon.vue'
import SunIcon from '@/components/icons/TopBar/SunIcon.vue'

import { onKeyStroke } from '@vueuse/core'

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    selectedButton.value = 0
  }
}
onKeyStroke('k', onKey)

const props = defineProps({
  locale: String
})

function changeLocale(locale: string) {
  if (props.locale !== locale) {
    window.location.href = `${window.location.origin}/${locale}`
  } else {
    window.location.href = `${window.location.origin}/`
  }
}

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { isOpen } = useSidebar()
const selectedButton = ref(-1)
const notificationOpen = ref(false)
</script>

<template>
  <header
    class="bg-gray-100 flex items-center justify-between px-6 py-2 border-b-2 border-gray-300 dark:bg-slate-800"
  >
    <div class="flex items-center">
      <!-- hamburger menu -->
      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <burgerIcon />
      </button>
    </div>

    <div class="flex items-center">
      <div class="flex items-center justify-end gap-2">
        <!-- Search button -->
        <div class="relative">
          <button
            class="flex p-1 text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none hover:bg-gray-200"
            @click="selectedButton = 2"
          >
            <SearchIcon class="w-6 h-6" />
          </button>
        </div>
        <el-divider direction="vertical" />
        <!-- create new -->
        <div class="relative">
          <el-tooltip content="Create new" placement="bottom" :effect="isDark ? 'light' : 'dark'">
            <button
              class="flex p-1 text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none hover:bg-gray-200"
              @click="selectedButton = 0"
            >
              <PlusIcon class="w-6 h-6" />
              <ArrowIcon class="w-6 h-6" />
            </button>
          </el-tooltip>

          <div
            v-show="selectedButton === 0"
            @click="selectedButton = -1"
            class="fixed inset-0 h-full w-full z-10"
          ></div>

          <div
            v-show="selectedButton === 0"
            class="absolute right-0 mt-2 w-44 py-3 bg-white rounded-lg shadow-xl overflow-hidden z-10"
            style="width: 11rem"
          >
            <RouterLink to="/CreateOperator" class="flex items-center justify-center text-gray-600">
              <div
                class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-green-700"
              >
                <operator />
                <span class="mx-2 text-xs font-semibold flex flex-row justify-between">
                  Create
                </span>
              </div>
            </RouterLink>

            <RouterLink to="/CreateCompany" class="flex items-center justify-center text-gray-600">
              <div
                class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-green-600"
              >
                <company />
                <span class="mx-2 text-xs font-semibold flex flex-row justify-between">
                  Create
                </span>
              </div>
            </RouterLink>

            <RouterLink
              to="/"
              class="flex items-center justify-center text-gray-600 hover:text-white"
            >
              <div
                class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-green-600"
              >
                <NoteIcon />
                <span class="mx-5 text-xs font-semibold flex flex-row justify-between">
                  Create
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
        <!-- Change Language -->
        <el-dropdown
          trigger="click"
          @command="changeLocale"
          class="flex p-1 text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none hover:bg-gray-200"
        >
          <div>
            <LanguageIcon class="w-6 h-6" />
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="locale in props.locale" :key="locale" :command="locale">
                {{ locale }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- Dark Mode -->
        <el-tooltip
          :content="isDark ? 'Light Mode' : 'Dark Mode'"
          placement="bottom"
          :effect="isDark ? 'light' : 'dark'"
        >
          <div class="relative">
            <button
              @click="toggleDark()"
              class="flex p-1 text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none hover:bg-gray-200"
            >
              <MoonIcon v-if="isDark" class="w-6 h-6" />
              <SunIcon v-else class="w-6 h-6" />
            </button>
          </div>
        </el-tooltip>
        <!-- Notification -->
        <el-tooltip content="Notifications" placement="bottom" :effect="isDark ? 'light' : 'dark'">
          <div class="relative">
            <button
              @click="notificationOpen = !notificationOpen"
              class="flex p-1 text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none hover:bg-gray-200"
            >
              <BellIcon class="w-6 h-6" />
            </button>

            <div
              v-show="notificationOpen"
              @click="notificationOpen = false"
              class="fixed inset-0 h-full w-full z-10"
            ></div>

            <div
              v-show="notificationOpen"
              class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
              style="width: 20rem"
            >
              <a
                href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="avatar"
                />
                <p class="text-sm mx-2">
                  <span class="font-bold" href="#">Evan Josh</span> replied on the
                  <span class="font-bold text-indigo-400" href="#">Upload Image</span>
                  artical . 2m
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="avatar"
                />
                <p class="text-sm mx-2">
                  <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p class="text-sm mx-2">
                  <span class="font-bold" href="#">Jane Doe</span> Like Your reply on
                  <span class="font-bold text-indigo-400" href="#">Test with TDD</span>
                  artical . 1h
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                  alt="avatar"
                />
                <p class="text-sm mx-2">
                  <span class="font-bold" href="#">Abigail Bennett</span>
                  start following you . 3h
                </p>
              </a>
            </div>
          </div>
        </el-tooltip>
      </div>
      <!-- Avatar  -->
      <div class="relative py-2 px-4">
        <button
          @click="selectedButton = 1"
          class="relative z-10 block overflow-hidden rounded-full shadow focus:outline-none"
        >
          <img class="object-cover w-9 h-9" src="https://i.pravatar.cc/300" alt="Your avatar" />
        </button>

        <div
          v-show="selectedButton === 1"
          @click="selectedButton = -1"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="selectedButton === 1"
            class="absolute right-0 z-20 w-48 py-1 mt-2 bg-white rounded-lg shadow-xl"
          >
            <RouterLink
              to="/Profile"
              class="px-4 py-2 flex rounded-md text-sm text-gray-700 hover:bg-green-600 hover:text-white"
            >
              <ProfileIcon />
              Profile</RouterLink
            >
            <RouterLink
              to="/Settings"
              class="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              <settings />
              Settings</RouterLink
            >
            <a
              href="/login"
              class="flex px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-green-600 hover:text-white"
            >
              <Logout />
              Log out
            </a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
