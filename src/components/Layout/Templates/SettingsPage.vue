<script setup lang="ts">
import { ref } from 'vue'
const selectedTab = ref(1)
</script>

<template>
  <div class="py-4 w-full max-w-7xl min-w-80 flex m-6 rounded-xl bg-white dark:bg-slate-800">
    <ul
      class="relative w-fit flex flex-col border-r border-#f0f0f0 dark:border-gray-500 list-none pr-8 gap-2"
    >
      <li>
        <button
          @click="() => (selectedTab = 1)"
          class="relative flex w-36 cursor-pointer text-sm font-semibold text-[#9D9D9D] dark:text-white text-left rounded-lg justify-start items-center p-3 gap-2 transition-all"
          :class="{
            'text-[#fff] dark:text-[#3e3e3e] bg-[#3e3e3e] dark:bg-[#f0f0f0]': selectedTab === 1,
            'hover:text-[#fff] dark:hover:text-[#3e3e3e] hover:bg-[#3e3e3e] dark:hover:bg-[#f0f0f0]':
              selectedTab !== 1
          }"
        >
          <svg
            class="w-10 h-10 stroke-[#9d9d9d] hover:text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21l18 0"></path>
            <path d="M3 10l18 0"></path>
            <path d="M5 6l7 -3l7 3"></path>
            <path d="M4 10l0 11"></path>
            <path d="M20 10l0 11"></path>
            <path d="M8 14l0 3"></path>
            <path d="M12 14l0 3"></path>
            <path d="M16 14l0 3"></path>
          </svg>
          Company Settings
        </button>
      </li>
      <li>
        <button
          @click="() => (selectedTab = 2)"
          class="relative flex w-full cursor-pointer text-sm font-semibold text-[#9D9D9D] dark:text-white text-left rounded-lg justify-start items-center p-3 gap-2 transition-all"
          :class="{
            'text-[#fff] dark:text-[#3e3e3e] bg-[#3e3e3e] dark:bg-[#f0f0f0]': selectedTab === 2,
            'hover:text-[#fff] dark:hover:text-[#3e3e3e] hover:bg-[#3e3e3e] dark:hover:bg-[#f0f0f0]':
              selectedTab !== 2
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 stroke-[#9d9d9d] hover:text-white dark:text-white"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path>
            <path d="M21 3a16 16 0 0 0 -12.8 10.2"></path>
            <path d="M21 3a16 16 0 0 1 -10.2 12.8"></path>
            <path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path>
          </svg>
          User Settings
        </button>
      </li>
    </ul>
    <div class="overflow-x-hidden overflow-y-auto h-fit transition-all py-0 px-4">
      <section
        id="tab1-content"
        class="p-5 mb-2 rounded-lg shadow-md border-2 scroll-m-56 md:scroll-m-20 border-brand-500 text-sm min-h-fit min-w-fit overflow-x-auto transition-all"
        v-show="selectedTab === 1"
      >
        <h2 class="flex justify-center text-xl font-semibold">Company settings</h2>
        <div>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Company name</h3>
          </div>
          <input
            class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-primary-50"
            type="text"
            value="BrightHR company"
          />
          <div class="py-10">
            <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
              <h3>BrightBase</h3>
            </div>
            <div
              data-e2e="BrightBase"
              data-testid="BrightBase"
              class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
            >
              <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
                <p class="pb-3 md:pb-0">
                  Enable this setting to give your managers access to the BrightBase library of
                  expert HR policies, templates, and guides.
                </p>
              </div>
              <div class="h-12 mt-5 md:mt-0 flex basis-full md:basis-[37%] md:max-w-[37%]">
                <div class="justify-around md:flex basis-1/2">
                  <div>
                    <div class="flex">
                      <div class="mr-3 flex items-end">
                        <label class="relative cursor-pointer">
                          <input type="checkbox" class="sr-only peer" />
                          <div
                            class="w-[53px] h-7 flex items-center bg-gray-300 rounded-full text-[9px] peer-checked:text-[#007bff] text-gray-300 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Off'] peer-checked:after:content-['On'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]"
                          ></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="p-5 mb-2 rounded-lg shadow-md border-2 scroll-m-56 md:scroll-m-20 border-brand-500 text-sm min-h-fit min-w-fit overflow-x-auto transition-all"
        id="#tab2"
        v-show="selectedTab === 2"
      >
        <h2 class="flex justify-center text-xl font-semibold">Employee settings</h2>
        <div>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Employee status</h3>
          </div>
          <div
            data-testid="status"
            class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
          >
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                Enables the ability for employees to display their current status.
              </p>
            </div>
            <div class="h-12 mt-5 md:mt-0 flex basis-full md:basis-[37%] md:max-w-[37%]">
              <div class="justify-around md:flex basis-1/2">
                <div>
                  <div class="flex">
                    <div class="mr-2 w-36">
                      <label
                        data-testid="label radio position left"
                        class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-primary-50 border-primary-400"
                        ><div>
                          <input
                            type="radio"
                            class="appearance-none"
                            data-e2e="Enable"
                            value="true"
                          /><span
                            class="relative flex-shrink-0 inline-flex items-center justify-center w-6 h-6 p-1.5 mr-4"
                            ><span
                              class="absolute w-[24px] h-full border rounded-full border-primary-400 cursor-pointer bg-transparent"
                            ></span
                            ><span
                              class="relative w-[24px] h-full transition-colors ease-in-out rounded-full bg-primary-400"
                            ></span
                          ></span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-base font-semibold text-neutral-700">Enable</span>
                        </div></label
                      >
                    </div>
                    <div class="w-36">
                      <label
                        data-testid="label radio position left"
                        class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-white border-neutral-300 hover:border-neutral-400"
                        ><div>
                          <input
                            type="radio"
                            class="appearance-none"
                            data-e2e="Disable"
                            value="true"
                            checked=""
                          /><span
                            class="relative flex-shrink-0 inline-flex items-center justify-center w-6 h-6 p-1.5 mr-4"
                            ><span
                              class="absolute w-[24px] h-full border rounded-full border-primary-400 cursor-pointer bg-transparent"
                            ></span
                            ><span
                              class="relative w-[24px] h-full transition-colors ease-in-out rounded-full bg-transparent"
                            ></span
                          ></span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-base font-semibold text-neutral-700">Disable</span>
                        </div></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Hide email addresses</h3>
          </div>
          <div
            data-testid="show-email"
            data-e2e="show-email"
            class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
          >
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <div class="pb-3 leading-normal md:pb-0">
                Show or hide employee email addresses from other employees, employees with payroll
                permissions are unaffected by this setting. This will affect:
                <ul>
                  <li class="flex">
                    <img
                      src="data:image/svg+xml;charset=UTF-8,%3csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='5' cy='5' r='5' fill='%233DB0F7'/%3e%3c/svg%3e"
                      alt="bullet"
                    />
                    <span class="pl-6">The employee hub</span>
                  </li>
                  <li class="flex">
                    <img
                      src="data:image/svg+xml;charset=UTF-8,%3csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='5' cy='5' r='5' fill='%233DB0F7'/%3e%3c/svg%3e"
                      alt="bullet"
                    />
                    <span class="pl-6">The contact details on the mobile app</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="h-12 mt-5 md:mt-0 flex basis-full md:basis-[37%] md:max-w-[37%]">
              <div class="justify-around md:flex basis-1/2">
                <div>
                  <div class="flex">
                    <div class="mr-2 w-36">
                      <label
                        data-testid="label radio position left"
                        class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-primary-50 border-primary-400"
                        ><div>
                          <input
                            type="radio"
                            class="appearance-none"
                            data-e2e="Show"
                            value="true"
                            checked=""
                          /><span
                            class="relative flex-shrink-0 inline-flex items-center justify-center w-6 h-6 p-1.5 mr-4"
                            ><span
                              class="absolute w-[24px] h-full border rounded-full border-primary-400 cursor-pointer bg-transparent"
                            ></span
                            ><span
                              class="relative w-[24px] h-full transition-colors ease-in-out rounded-full bg-primary-400"
                            ></span
                          ></span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-base font-semibold text-neutral-700">Show</span>
                        </div></label
                      >
                    </div>
                    <div class="w-36">
                      <label
                        data-testid="label radio position left"
                        class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-white border-neutral-300 hover:border-neutral-400"
                        ><div>
                          <input
                            type="radio"
                            class="appearance-none"
                            data-e2e="Hide"
                            value="true"
                          /><span
                            class="relative flex-shrink-0 inline-flex items-center justify-center w-6 h-6 p-1.5 mr-4"
                            ><span
                              class="absolute w-[24px] h-full border rounded-full border-primary-400 cursor-pointer bg-transparent"
                            ></span
                            ><span
                              class="relative w-[24px] h-full transition-colors ease-in-out rounded-full bg-transparent"
                            ></span
                          ></span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-base font-semibold text-neutral-700">Hide</span>
                        </div></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Hide employees</h3>
          </div>
          <div
            data-testid="hide-other-employees"
            data-e2e="hide-other-employees"
            class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
          >
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                Hide employee details from other employees. Admins and Managers are unaffected by
                this setting. This will take effect across all BrightHR products.
              </p>
            </div>
            <div class="h-12 mt-5 md:mt-0 flex basis-full md:basis-[37%] md:max-w-[37%]">
              <div class="justify-around md:flex basis-1/2">
                <div>
                  <div class="flex">
                    <div class="mr-2 w-36">
                      <label
                        data-testid="label radio position left"
                        class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-white border-neutral-300 hover:border-neutral-400"
                        ><div>
                          <input
                            type="radio"
                            class="appearance-none"
                            data-e2e="Enable"
                            value="false"
                          /><span
                            class="relative flex-shrink-0 inline-flex items-center justify-center w-6 h-6 p-1.5 mr-4"
                            ><span
                              class="absolute w-[24px] h-full border rounded-full border-primary-400 cursor-pointer bg-transparent"
                            ></span
                            ><span
                              class="relative w-[24px] h-full transition-colors ease-in-out rounded-full bg-transparent"
                            ></span
                          ></span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-base font-semibold text-neutral-700">Enable</span>
                        </div></label
                      >
                    </div>
                    <div class="w-36">
                      <label
                        data-testid="label radio position left"
                        class="flex border rounded-lg p-4 transition-colors ease-in-out cursor-pointer bg-primary-50 border-primary-400"
                        ><div>
                          <input
                            type="radio"
                            class="appearance-none"
                            data-e2e="Disable"
                            value="false"
                            checked=""
                          /><span
                            class="relative flex-shrink-0 inline-flex items-center justify-center w-6 h-6 p-1.5 mr-4"
                            ><span
                              class="absolute w-[24px] h-full border rounded-full border-primary-400 cursor-pointer bg-transparent"
                            ></span
                            ><span
                              class="relative w-[24px] h-full transition-colors ease-in-out rounded-full bg-primary-400"
                            ></span
                          ></span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-base font-semibold text-neutral-700">Disable</span>
                        </div></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
