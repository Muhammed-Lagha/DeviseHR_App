<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
      class="w-8 h-8 flex items-center justify-center p-1 text-gray-600 border-[1px] border-gray-200 rounded-md focus:outline-none bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 dark:border-gray-500 dark:hover:border-gray-200"
      :class="{ 'bg-slate-200': dropdownOpen }"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Info</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
        <path
          class="fill-current text-slate-500 dark:text-slate-400"
          d="M14.6 8.075q0-1.075-.712-1.725T12 5.7q-.725 0-1.312.313t-1.013.912q-.4.575-1.088.663T7.4 7.225q-.35-.325-.387-.8t.237-.9q.8-1.2 2.038-1.862T12 3q2.425 0 3.938 1.375t1.512 3.6q0 1.125-.475 2.025t-1.75 2.125q-.925.875-1.25 1.363T13.55 14.6q-.1.6-.513 1t-.987.4q-.575 0-.987-.387t-.413-.963q0-.975.425-1.787T12.5 11.15q1.275-1.125 1.688-1.737t.412-1.338M12 22q-.825 0-1.412-.587T10 20q0-.825.588-1.412T12 18q.825 0 1.413.588T14 20q0 .825-.587 1.413T12 22"
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
        class="origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        :class="align === 'right' ? 'right-0' : 'left-0'"
      >
        <div
          class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3"
        >
          Need help?
        </div>
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                class="w-3 h-3 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 12 12"
              >
                <rect y="3" width="12" height="9" rx="1" />
                <path d="M2 0h8v2H2z" />
              </svg>
              <span>Documentation</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                class="w-3 h-3 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 12 12"
              >
                <path
                  d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
                />
              </svg>
              <span>Support Site</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                class="w-3 h-3 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 12 12"
              >
                <path
                  d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                />
              </svg>
              <span>Contact us</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
