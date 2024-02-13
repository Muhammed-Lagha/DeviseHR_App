<script setup lang="ts">
import { ref } from 'vue'
const selectedTab = ref(1)
</script>

<template>
  <div class="w-full bg-white dark:bg-slate-800">
    <!-- Tabs -->
    <div class="pb-2">
      <ul
        class="p-0 m-0 flex list-none tablist text-neutral-700 transition-colors self-end overflow-x-hidden border-b border-neutral-400"
      >
        <li>
          <button
            @click="selectedTab = 1"
            class="flex py-2 font-sans text-base bg-transparent cursor-pointer lg:shrink-0 lg:basis-auto hover:text-indigo-600 hover:fill-indigo-600 transition-colors min-w-[80px] justify-center px-4"
            :class="{
              'border-b-4 border-indigo-500 fill-indigo-500 text-indigo-700 font-semibold ':
                selectedTab === 1
            }"
          >
            <div class="flex items-center space-x-2"><span>Company Settings</span></div>
          </button>
        </li>
        <li>
          <button
            @click="selectedTab = 2"
            class="flex py-2 font-sans text-base bg-transparent cursor-pointer lg:shrink-0 lg:basis-auto hover:text-indigo-600 hover:fill-indigo-600 transition-colors min-w-[80px] justify-center px-4"
            :class="{
              'border-b-4 border-indigo-500 fill-indigo-500 text-indigo-700 font-semibold ':
                selectedTab === 2
            }"
          >
            <div class="flex items-center space-x-2"><span>Users Settings</span></div>
          </button>
        </li>
        <li>
          <button
            @click="selectedTab = 3"
            class="flex py-2 font-sans text-base bg-transparent cursor-pointer lg:shrink-0 lg:basis-auto hover:text-indigo-600 hover:fill-indigo-600 transition-colors min-w-[80px] justify-center px-4"
          >
            <div class="flex items-center space-x-2"><span>Permissions</span></div>
          </button>
        </li>
      </ul>
    </div>
    <div class="overflow-x-hidden overflow-y-auto h-fit transition-all py-0 px-4">
      <section
        id="tab1-content"
        class="p-5 mb-2 scroll-m-56 md:scroll-m-20 border-brand-500 text-sm min-h-fit min-w-fit overflow-x-auto transition-all"
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
        class="mb-2 scroll-m-56 md:scroll-m-20 border-brand-500 text-sm min-h-fit min-w-fit overflow-x-auto transition-all"
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
                    <div class="mr-3w-36">
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
                    <div class="mr-3w-36">
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
                    <div class="mr-3w-36">
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
        </div>
      </section>
    </div>
  </div>
</template>
