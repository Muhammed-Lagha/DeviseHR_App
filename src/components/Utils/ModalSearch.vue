<script lang="ts" setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import SearchIcon from '@/components/icons/TopBar/Search.vue'
// import Calendar from '@/components/icons/SideBar/CalendarIcon.vue'
// import shiftIcon from '@/components/icons/OthersIcons/ShiftIcon.vue'
// import HomeIcon from '@/components/icons/SideBar/HomeIcon.vue'
// import page from '@/components/icons/OthersIcons/PageIcon.vue'

const props = defineProps({
  id: {
    type: String,
    default: 'default-modal'
  },
  searchId: {
    type: String,
    default: 'search-modal'
  },
  modalOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['open-modal', 'close-modal'])

const modalContent = ref(null as any)
const searchInput = ref(null as any)

// close on click outside
const clickHandler = ({ target }: { target: any }) => {
  if (!props.modalOpen || modalContent.value.contains(target)) return
  emit('close-modal')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }: { keyCode: number }) => {
  if (!props.modalOpen || keyCode !== 27) return
  emit('close-modal')
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

watch(
  () => props.modalOpen,
  (open) => {
    open && nextTick(() => searchInput.value.focus())
  }
)
</script>

<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
      aria-hidden="true"
    ></div>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 z-50 overflow-hidden flex items-start justify-start left-40 top-2 mb-4 px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref="modalContent"
        class="bg-gray-100 dark:bg-slate-800 border-none overflow-auto max-w-2xl w-full max-h-full rounded"
      >
        <!-- Search form -->
        <form @submit.prevent="$emit('close-modal')">
          <div class="relative">
            <label :for="searchId" class="sr-only">Search</label>
            <input
              :id="searchId"
              class="w-full border-none dark:text-slate-300 bg-gray-100 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 appearance-none py-3 pl-10 pr-4"
              type="text"
              placeholder="Search DeviseHR ..."
              ref="searchInput"
              @keyup.enter="$emit('close-modal')"
            />
            <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
              <SearchIcon class="w-4 h-4 text-slate-400 group-hover:text-slate-500 ml-3" />
            </button>
          </div>
        </form>
        <!-- <div class="py-4 px-2">
          
          <div class="mb-3 last:mb-0">
            <div class="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Jump to</div>
            <ul class="text-sm">
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <HomeIcon
                    class="w-4 h-4 fill-current text-slate-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500 shrink-0 mr-3"
                  />

                  <span>Home</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <calendar
                    class="w-4 h-4 fill-current text-slate-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500 shrink-0 mr-3"
                  />

                  <span>Calendar</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <shiftIcon
                    class="w-4 h-4 fill-current text-slate-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500 shrink-0 mr-3"
                  />

                  <span>Rota</span>
                </router-link>
              </li>
            </ul>
          </div>
          
          <div class="mb-3 last:mb-0">
            <div class="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent pages</div>
            <ul class="text-sm">
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <page
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                  />
                  <span
                    ><span class="font-medium">Add Employee</span> -
                    <span class="text-slate-600 group-hover:text-white">
                      Add New Employee</span
                    ></span
                  >
                </router-link>
              </li>
              <li>
                <router-link
                  class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-green-500 rounded group"
                  to="#0"
                  @click="$emit('close-modal')"
                >
                  <page
                    class="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                  />
                  <span
                    ><span class="font-medium">Roles</span> -
                    <span class="text-slate-600 group-hover:text-white"
                      >Edit or Manage Roles</span
                    ></span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </transition>
</template>
