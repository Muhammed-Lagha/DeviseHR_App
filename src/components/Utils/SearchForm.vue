<script setup lang="ts">
const emit = defineEmits(['search'])
const search = (e: any) => {
  emit('search', e.target.value)
}
</script>

<template>
  <form class="py-3 px-4 flex items-center">
    <label for="search" class="sr-only">Search</label>
    <input
      class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#0F0F0F] placeholder-gray-300 dark:placeholder-gray-500 appearance-none py-2 pl-10 pr-4"
      type="text"
      @input="search"
      placeholder="Search..."
    />
  </form>
</template>
