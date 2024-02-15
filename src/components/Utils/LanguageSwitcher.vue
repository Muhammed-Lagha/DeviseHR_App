<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LibyaIcon from '../icons/OthersIcons/LibyaIcon.vue'
import UkIcon from '../icons/OthersIcons/UkIcon.vue'

defineProps<{
  align?: string
}>()

// dropdown state
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
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="w-8 h-8 flex items-center justify-center p-1 text-gray-600 dark:text-gray-400 border-[1px] border-gray-200 rounded-md focus:outline-none hover:bg-slate-200 dark:hover:bg-[#282828] dark:border-gray-500 dark:hover:border-gray-200"
      :class="{ 'dark:bg-[#282828]': dropdownOpen }"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Language</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
        <path
          class="fill-current text-gray-500 dark:text-gray-400"
          d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white dark:bg-[#282828] py-1.5 rounded shadow-lg overflow-hidden mt-1"
        :class="align === 'right' ? 'right-0' : 'left-0'"
      >
        <div
          class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-4"
        >
          Language !
        </div>
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <LibyaIcon />

              <span>Arabic</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <UkIcon />

              <span>English</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
