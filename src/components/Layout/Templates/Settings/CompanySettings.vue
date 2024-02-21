<script setup lang="ts">
import { ref } from 'vue'
import selectedTab from '@/Hooks/useSelectedTab'
const CompanyName = ref('')

const register = () => {
  console.log(CompanyName.value)
}
</script>

<template>
  <section
    id="tab1-content"
    class="mb-2 scroll-m-56 md:scroll-m-20 border-brand-500 text-sm min-h-fit min-w-fit overflow-x-auto transition-all"
    v-show="selectedTab === 1"
  >
    <form @submit.prevent="register">
      <h2
        class="flex justify-center text-xl text-neutral-700 dark:text-neutral-300 font-semibold my-8"
      >
        Company settings
      </h2>
      <div class="text-neutral-700 dark:text-neutral-300">
        <div class="py-10">
          <div class="flex flex-col flex-wrap lg:flex-row opacity-100">
            <div class="pt-5 pb-2 text-xl font-bold opacity-100">
              <h3>Company name</h3>
            </div>
            <input
              class="border rounded-lg p-4 mr-44 transition-colors ease-in-out cursor-pointer bg-gray-100 dark:bg-gray-600 border-indigo-300 focus:border-indigo-500"
              type="text"
              v-model="CompanyName"
            />
          </div>
        </div>
        <div class="text-neutral-700 dark:text-neutral-300">
          <h2 class="flex justify-start text-xl font-semibold text-indigo-500">
            Overtime and TOIL
          </h2>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Allow overtime</h3>
          </div>
          <div class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100">
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                Select Enable to allow managers and admins to record additional hours for employees
                and let staff book absences using the time they've built up. If you choose Disable,
                managers and admins won’t be able to record any overtime and BrightHR will hide all
                references to overtime from your account. If you have pending overtime requests you
                won’t be able to manage them if you disable overtime.
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
            <h3>Record overtime</h3>
          </div>
          <div
            data-e2e="show-email"
            class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
          >
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <div class="pb-3 leading-normal md:pb-0">
                By selecting Managers you're allowing only BrightHR managers to record overtime for
                employees. To let employees record overtime themselves, select Everyone
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
            <h3>Use TOIL balance</h3>
          </div>
          <div class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100">
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                By selecting Everyone employees will be able to send an absence request using their
                TOIL balance to their Manager or Admin for approval. By selecting Managers, only
                BrightHR managers will be able to book TOIL absences on behalf of their employees.
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
        <div class="text-neutral-700 dark:text-neutral-300 my-4 pt-4">
          <h2 class="flex justify-start text-xl font-semibold text-indigo-500">
            Absence and Entitlement
          </h2>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Absence conflict when not in teams</h3>
          </div>
          <div class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100">
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                If enabled, this setting allows you to also see absence conflicts between employees
                who haven't been added to a team.<br />
                If disabled, employees who haven't been added to a team won't show as absence
                conflicts with each other.
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
            <h3>Annual leave carryover</h3>
          </div>
          <div
            data-e2e="show-email"
            class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
          >
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <div class="pb-3 leading-normal md:pb-0">
                Enables the ability to add a 'carryover' balance for an employee, so they can carry
                over unused annual leave from one year to the next. You can specify the amount to be
                carried over for each employee on their profile. N.B. Carryover balance will be used
                for annual leave requests if that employee has a carryover balance, even if this
                switch is disabled.
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
                            <input type="checkbox" checked class="sr-only peer" />
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
            <h3>Prevent employees cancelling future annual leave</h3>
          </div>
          <div class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100">
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                Enabling this setting removes the ability for your employees to delete their own
                annual leave requests. Their manager or an administrator must take this action on
                their behalf.
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
        <div class="text-neutral-700 dark:text-neutral-300 my-4 pt-4">
          <h2 class="flex justify-start text-xl font-semibold text-indigo-500">Rotas</h2>
          <div class="flex items-center pt-5 pb-2 text-xl font-bold opacity-100">
            <h3>Restricted rota permissions</h3>
          </div>
          <div class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100">
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                By enabling this setting, you are restricting the edit and delete capabilities of
                your managers. Once created, rotas can be edited by the author and by admins.
                Additional managers can be given edit permissions from the rota menu.
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
            <h3>Hide shift labels in rotas from employees</h3>
          </div>
          <div
            data-e2e="show-email"
            class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100"
          >
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <div class="pb-3 leading-normal md:pb-0">
                Enabling this setting will prevent employees from seeing any colours and labels
                assigned to shifts on your rotas.
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
                            <input type="checkbox" checked class="sr-only peer" />
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
            <h3>Activate open shifts</h3>
          </div>
          <div class="flex flex-col flex-wrap justify-between lg:flex-row opacity-100">
            <div class="basis-full md:basis-[58%] md-max-w-[58%] pb-3 md:pb-0">
              <p class="pb-3 leading-normal md:pb-0">
                Enabling this setting will allow employees to assign themselves to available open
                shifts. Only admins and managers can create open shifts.
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
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </form>
  </section>
</template>
