<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import SidebarLinkGroup from '@/components/Utils/SidebarLinkGroup.vue'
import { useDarkMode } from '@/Hooks/useDark'

const { isDark } = useDarkMode()

const emit = defineEmits(['close-sidebar'])

const props = defineProps<{
  sidebarOpen: Boolean
}>()

const trigger = ref(null as any)
const sidebar = ref(null as any)

const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
const sidebarExpanded = ref(
  storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
)

// close on click outside
const clickHandler = ({ target }: { target: any }) => {
  if (!sidebar.value || !trigger.value) return
  if (!props.sidebarOpen || sidebar.value.contains(target) || trigger.value.contains(target)) return
  emit('close-sidebar')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }: { keyCode: number }) => {
  if (!props.sidebarOpen || keyCode !== 27) return
  emit('close-sidebar')
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

watch(sidebarExpanded, () => {
  localStorage.setItem('sidebar-expanded', sidebarExpanded.value.toString())
  if (sidebarExpanded.value) {
    document.querySelector('body')!.classList.add('sidebar-expanded')
  } else {
    document.querySelector('body')!.classList.remove('sidebar-expanded')
  }
})
</script>
<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div
      class="fixed inset-0 bg-[#282828] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#282828] p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-slate-500 hover:text-slate-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
        >
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <defs>
              <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                <stop stop-color="#A5B4FC" offset="100%" />
              </linearGradient>
              <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                <stop stop-color="#33E0FF" stop-opacity="0" offset="0%" />
                <stop stop-color="#99EDEE" offset="100%" />
              </linearGradient>
            </defs>
            <rect fill="#6366F1" width="32" height="32" rx="16" />
            <path
              d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
              fill="#4F46E5"
            />
            <path
              d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
              fill="url(#logo-a)"
            />
            <path
              d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
              fill="url(#logo-b)"
            />
          </svg>
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span
              class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6 mb-5"
              aria-hidden="true"
              >•••</span
            >
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block mb-2">Pages</span>
          </h3>
          <ul class="mt-14">
            <!-- Nav item -->
            <SidebarLinkGroup
              class="my-2"
              v-slot="parentLink"
              :activeCondition="$route.name === 'Home'"
            >
              <router-link
                class="flex items-center text-neutral-300 truncate transition duration-150"
                to="/"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center lg:flex-col">
                  <div class="flex items-center">
                    <el-tooltip
                      :effect="isDark ? 'light' : 'dark'"
                      :disabled="!sidebarExpanded"
                      content="Home"
                      placement="right"
                    >
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      >
                        <g transform="translate(0 -1028.4)">
                          <rect fill="#c0392b" height="5.9999" width="3" x="17" y="1031.4" />
                          <path
                            d="m12 3.0312l-9 8.9688v1.812 5.376 1.812h1 8 8 1v-1.812-5.376-1.812l-9-8.9688z"
                            fill="#bdc3c7"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m12 1032-9 8.9v1.9 0.1l9-9 9 9v-0.1-1.9l-9-8.9z"
                            fill="#95a5a6"
                          />
                          <g>
                            <path
                              d="m12 1029.4-11.314 11.3 1.4145 1.4 9.8995-9.9 9.899 9.9 1.415-1.4-11.314-11.3z"
                              fill="#e74c3c"
                            />
                            <path
                              d="m14 9a2 2 0 1 1 -4 0 2 2 0 1 1 4 0z"
                              fill="#3498db"
                              transform="translate(0 1029.4)"
                            />
                            <rect fill="#e67e22" height="6" width="4" x="10" y="1043.4" />
                            <path
                              d="m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z"
                              fill="#d35400"
                              transform="translate(1.5 1029.4)"
                            />
                            <path
                              d="m12 1036.4c-1.105 0-2 0.9-2 2 0 0.1 0.021 0.3 0.062 0.5 0.222-0.9 1.006-1.5 1.938-1.5s1.716 0.6 1.938 1.5c0.041-0.2 0.062-0.4 0.062-0.5 0-1.1-0.895-2-2-2z"
                              fill="#2980b9"
                            />
                            <path
                              d="m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z"
                              fill="#f1c40f"
                              transform="translate(1.5 1028.9)"
                            />
                            <rect fill="#d35400" height="1" width="4" x="10" y="1042.4" />
                          </g>
                        </g>
                      </svg>
                    </el-tooltip>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Home</span
                    >
                  </div>
                </div>
              </router-link>
            </SidebarLinkGroup>
            <SidebarLinkGroup
              class="my-2"
              v-slot="parentLink"
              :activeCondition="$route.name === 'Employees'"
            >
              <router-link
                class="flex items-center text-neutral-300 truncate transition duration-150"
                to="/employees"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center lg:flex-col">
                  <div class="flex items-center">
                    <el-tooltip
                      :effect="isDark ? 'light' : 'dark'"
                      :disabled="!sidebarExpanded"
                      content="Employees"
                      placement="right"
                    >
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      >
                        <g transform="translate(0 -1028.4)">
                          <g fill="#bdc3c7" transform="matrix(.77981 0 0 .78862 2.9634 174.84)">
                            <path
                              d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z"
                              transform="translate(6 1088.4)"
                            />
                            <path
                              d="m18 1096.4c-1.277 0-2.494 0.2-3.594 0.7-2.885 1.3-4.9779 4-5.3435 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-1.1-0.5-2.317-0.7-3.594-0.7z"
                            />
                          </g>
                          <g fill="#7f8c8d" transform="matrix(.77981 0 0 .78862 -7.0366 174.84)">
                            <path
                              d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z"
                              transform="translate(6 1088.4)"
                            />
                            <path
                              d="m18 1096.4c-1.277 0-2.494 0.2-3.594 0.7-2.885 1.3-4.9779 4-5.3435 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-1.1-0.5-2.317-0.7-3.594-0.7z"
                            />
                          </g>
                          <path
                            d="m8.4062 1041.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z"
                            fill="#2c3e50"
                          />
                          <path
                            d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z"
                            fill="#34495e"
                            transform="translate(0 1031.4)"
                          />
                          <path
                            d="m12 11c-1.277 0-2.4943 0.269-3.5938 0.75-2.8856 1.262-4.9781 3.997-5.3437 7.25 0 1.105 0.8329 2 1.9375 2h14c1.105 0 1.938-0.895 1.938-2-0.366-3.253-2.459-5.988-5.344-7.25-1.1-0.481-2.317-0.75-3.594-0.75z"
                            fill="#34495e"
                            transform="translate(0 1028.4)"
                          />
                        </g>
                      </svg>
                    </el-tooltip>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Employees</span
                    >
                  </div>
                </div>
              </router-link>
            </SidebarLinkGroup>
            <SidebarLinkGroup
              class="my-2"
              v-slot="parentLink"
              :activeCondition="$route.name === 'Calendar'"
            >
              <router-link
                class="flex items-center text-neutral-300 truncate transition duration-150"
                :class="$route.name === 'Calendar' ? 'hover:text-neutral-300' : 'hover:text-white'"
                to="/calendar"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center lg:flex-col">
                  <div class="flex items-center">
                    <el-tooltip
                      :effect="isDark ? 'light' : 'dark'"
                      :disabled="!sidebarExpanded"
                      content="Calendar"
                      placement="right"
                    >
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      >
                        <g transform="translate(0 -1028.4)">
                          <path
                            d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z"
                            fill="#bdc3c7"
                          />
                          <path
                            d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z"
                            fill="#ecf0f1"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m5 1031.4c-1.1046 0-2 0.9-2 2v3h18v-3c0-1.1-0.895-2-2-2h-6-2-6z"
                            fill="#e74c3c"
                          />
                          <path
                            d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
                            fill="#c0392b"
                            transform="translate(.5 1028.4)"
                          />
                          <path
                            d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z"
                            fill="#bdc3c7"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
                            fill="#c0392b"
                            transform="translate(12.5 1028.4)"
                          />
                          <g fill="#bdc3c7">
                            <path
                              d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z"
                            />
                            <path
                              d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
                            />
                            <path
                              d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
                            />
                            <path
                              d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
                            />
                          </g>
                          <rect
                            fill="#c0392b"
                            height="1"
                            transform="translate(0 1028.4)"
                            width="18"
                            x="3"
                            y="8"
                          />
                        </g>
                      </svg>
                    </el-tooltip>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Calendar</span
                    >
                  </div>
                </div>
              </router-link>
            </SidebarLinkGroup>

            <SidebarLinkGroup
              class="my-2"
              v-slot="parentLink"
              :activeCondition="$route.name === 'Rotas&Shifts'"
            >
              <router-link
                class="flex items-center text-neutral-300 truncate transition duration-150"
                :class="
                  $route.name === 'Rotas&Shifts' ? 'hover:text-neutral-300' : 'hover:text-white'
                "
                to="/rotas&shifts/"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center lg:flex-col">
                  <div class="flex items-center">
                    <el-tooltip
                      :effect="isDark ? 'light' : 'dark'"
                      :disabled="!sidebarExpanded"
                      content="Rotas & Shifts"
                      placement="right"
                    >
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      >
                        <g transform="translate(0 -1028.4)">
                          <path
                            d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z"
                            fill="#bdc3c7"
                          />
                          <path
                            d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z"
                            fill="#ecf0f1"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m5 3c-1.1046 0-2 0.8954-2 2v3 1h18v-1-3c0-1.1046-0.895-2-2-2h-6-2-6z"
                            fill="#e74c3c"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
                            fill="#c0392b"
                            transform="translate(.5 1028.4)"
                          />
                          <path
                            d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z"
                            fill="#bdc3c7"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
                            fill="#c0392b"
                            transform="translate(12.5 1028.4)"
                          />
                          <g fill="#bdc3c7">
                            <path
                              d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z"
                            />
                            <path
                              d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
                            />
                            <path
                              d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
                            />
                            <path
                              d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
                            />
                          </g>
                          <path
                            d="m40 18a6 6 0 1 1 -12 0 6 6 0 1 1 12 0z"
                            fill="#34495e"
                            transform="matrix(.82491 0 0 .82491 -9.5468 1032.1)"
                          />
                          <path
                            d="m18.5 14c-0.276 0-0.5 0.224-0.5 0.5v0.5 3 0.5c0 0.276 0.224 0.5 0.5 0.5h0.5 2 0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5-2v-3-0.5c0-0.276-0.224-0.5-0.5-0.5z"
                            fill="#bdc3c7"
                            transform="translate(0 1028.4)"
                          />
                          <path
                            d="m18.5 1041.4c-3.038 0-5.5 2.4-5.5 5.5 0 3 2.462 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-3.1-2.462-5.5-5.5-5.5zm0 1c2.485 0 4.5 2 4.5 4.5 0 2.4-2.015 4.5-4.5 4.5s-4.5-2.1-4.5-4.5c0-2.5 2.015-4.5 4.5-4.5z"
                            fill="#7f8c8d"
                          />
                          <path
                            d="m27 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z"
                            fill="#95a5a6"
                            transform="translate(-8 1029.4)"
                          />
                        </g>
                      </svg>
                    </el-tooltip>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Rotas & Shifts</span
                    >
                  </div>
                </div>
              </router-link>
            </SidebarLinkGroup>
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
    </div>
  </div>
</template>
