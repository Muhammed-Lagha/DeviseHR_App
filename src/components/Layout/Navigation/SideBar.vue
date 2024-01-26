<script setup lang="ts">
import HomeIcon from '@/components/icons/SideBar/HomeIcon.vue'
import CalendarIcon from '@/components/icons/SideBar/CalendarIcon.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useSidebar } from '@/Hooks/useSidebar'

const props = defineProps({
  locale: String
})

const { isOpen } = useSidebar()
const activeClass = ref('bg-green-600 bg-opacity-25 text-gray-100 border-green-400')
const inactiveClass = ref(
  'border-slate-800 text-gray-400 hover:bg-gray-600 hover:bg-opacity-25 hover:border-slate-600 hover:text-gray-100'
)
</script>
<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <!-- :class="props.locale == 'ar' ? 'right-0' : 'left-0'" -->
    <div
      :class="isOpen ? 'w-64 translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-20 bg-slate-800 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="mx-2 text-2xl font-semibold text-slate-300"
            >D<span class="text-green-600">HR</span></span
          >
        </div>
      </div>

      <nav class="mt-10">
        <p class="pl-4 text-xs font-semibold mb-4 text-gray-400">Menu</p>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Home' ? activeClass : inactiveClass]"
          to="/Home"
        >
          <HomeIcon class="w-5 h-5" />

          <span :class="isOpen ? 'block' : 'hidden'" class="mx-4">Home</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Calendar' ? activeClass : inactiveClass]"
          to="/Calendar"
        >
          <CalendarIcon class="w-5 h-5" />

          <span :class="isOpen ? 'block' : 'hidden'" class="mx-4">Home</span>
        </router-link>
        <p class="pl-4 text-xs my-2 font-semibold mb-4 text-gray-400">About</p>
      </nav>
    </div>
  </div>
</template>
