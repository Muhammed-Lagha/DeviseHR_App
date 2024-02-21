<script setup lang="ts">
import selectedTab from '@/Hooks/useSelectedTab'
</script>

<template>
  <div class="pb-2">
    <ul
      class="p-0 m-0 flex list-none tablist text-neutral-700 dark:text-neutral-300 transition-colors self-end overflow-x-hidden border-b border-neutral-400"
    >
      <li
        :class="{
          'border-b-2 border-indigo-500 fill-indigo-500 text-indigo-700': selectedTab === 1
        }"
      >
        <button
          @click="selectedTab = 1"
          class="flex py-2 font-sans text-base bg-transparent cursor-pointer lg:shrink-0 lg:basis-auto hover:text-indigo-600 hover:fill-indigo-600 transition-colors min-w-[80px] justify-center px-4"
          :class="{
            'border-indigo-500 fill-indigo-500 text-indigo-700 font-semibold ': selectedTab === 1
          }"
        >
          <div class="flex items-center space-x-2"><span>Company Settings</span></div>
        </button>
      </li>
      <li
        :class="{
          'border-b-2 border-indigo-500 fill-indigo-500 text-indigo-700': selectedTab === 2
        }"
      >
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
      <li
        :class="{
          'border-b-2 border-indigo-500 fill-indigo-500 text-indigo-700': selectedTab === 3
        }"
      >
        <button
          @click="selectedTab = 3"
          class="flex py-2 font-sans text-base bg-transparent cursor-pointer lg:shrink-0 lg:basis-auto hover:text-indigo-600 hover:fill-indigo-600 transition-colors min-w-[80px] justify-center px-4"
          :class="{
            'border-b-4 border-indigo-500 fill-indigo-500 text-indigo-700 font-semibold ':
              selectedTab === 3
          }"
        >
          <div class="flex items-center space-x-2"><span>Permissions</span></div>
        </button>
      </li>
    </ul>
  </div>
</template>
