<script setup lang="ts">
import ArrowIcon from '@/components/icons/TopBar/P&A/ArrowIcon.vue'
import PlusIcon from '@/components/icons/TopBar/P&A/PlusIcon.vue'
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  align?: string
}>()

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
      class="w-12 h-8 flex items-center justify-center p-1 text-gray-600 dark:text-gray-400 border-[1px] border-gray-200 rounded-md focus:outline-none hover:bg-slate-200 dark:hover:bg-[#282828] dark:border-gray-500 dark:hover:border-gray-200"
      :class="{ 'dark:bg-[#282828]': dropdownOpen }"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Actions</span>
      <PlusIcon class="w-11 h-11" />
      <ArrowIcon class="w-11 h-11" />
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
          Actions
        </div>
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0 0q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Z"
                />
              </svg>
              <span>Add Annual Leave</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m4.2 12.2L11 13V7h1.5v5.2l4.5 2.7z"
                  opacity=".3"
                />
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7z"
                />
              </svg>
              <span>Add Lateness</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.8 22.6l-2.4-2.4q-1.2.875-2.588 1.338T12 22q-1.85 0-3.488-.712T5.65 19.35q-1.225-1.225-1.937-2.863T3 13q0-1.5.463-2.887T4.8 7.6L1.4 4.2l1.4-1.4l18.4 18.4zM9 3V1h6v2zm10.95 14.15L13 10.2V8h-2v.2L7.825 5.025q.95-.5 2.013-.763T12 4q1.5 0 2.938.5t2.712 1.45l1.4-1.4l1.4 1.4l-1.4 1.4q.95 1.275 1.45 2.713T21 13q0 1.05-.262 2.088t-.788 2.062"
                />
              </svg>
              <span>Add Time Off</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              to="#0"
              @click="dropdownOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-current text-indigo-300 dark:text-indigo-500 shrink-0 mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m8.4 11.6l2.1-2.1l-2.125-2.125l-1.05 1.05L8.4 9.475L7.325 10.55zM21 9q-.825 0-1.412-.587T19 7q0-.675.375-1.437T21 3q1.25 1.8 1.625 2.563T23 7q0 .825-.587 1.413T21 9m-5.375 2.625L16.7 10.55l-1.075-1.075l1.05-1.05l-1.05-1.05L13.5 9.5zM12 13.5q-.65 0-1.263.15t-1.162.425L6 12q0-.4-.2-.75t-.55-.55q-.55-.3-1.137-.137t-.913.687q-.3.55-.137 1.138t.687.912q.35.2.75.2t.75-.2l2.975 1.725q-.425.425-.763.913T6.9 17h1.65q.525-.9 1.425-1.45T12 15q1.125 0 2.025.55T15.45 17h1.65q-.6-1.55-1.963-2.525T12 13.5m0 8.5q-2.1 0-3.925-.788T4.9 19.075q-1.35-1.35-2.125-3.175T2 12q0-2.075.775-3.9T4.9 4.925q1.35-1.35 3.175-2.138T12 2q1.85 0 3.488.6t2.937 1.7q-.35.65-.638 1.3T17.5 7q0 1.475 1.025 2.488T21 10.5q.225 0 .45-.025t.425-.075q.05.4.088.788T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                />
              </svg>

              <span>Add Sickness</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
