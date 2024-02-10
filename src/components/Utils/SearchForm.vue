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
      class="border border-gray-300 text-gray-900 text-sm rounded-lg input block w-full dark:border-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 appearance-none py-2 pl-10 pr-4"
      type="text"
      @input="search"
      placeholder="Search..."
    />
  </form>
</template>

<style scoped>
.input :focus {
  outline: none;
  border-color: #4978f0;
}
</style>
