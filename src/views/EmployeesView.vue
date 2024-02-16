<script setup lang="ts">
import AuthenticatedLayout from '@/components/Layout/AuthenticatedLayout.vue'
import RenderEmployees from '@/components/Layout/EmployeesLayout/RenderEmployees.vue'
</script>

<template>
  <AuthenticatedLayout>
    <div class="container rounded-md bg-white dark:bg-[#0F0F0F]">
      <RenderEmployees />
    </div>
  </AuthenticatedLayout>
</template>
