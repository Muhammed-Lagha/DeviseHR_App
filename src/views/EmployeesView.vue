<script setup lang="ts">
import AuthenticatedLayout from '@/components/Layout/AuthenticatedLayout.vue'
import RenderEmployees from '@/components/Layout/EmployeesLayout/RenderEmployees.vue'
</script>

<template>
  <AuthenticatedLayout>
    <div class="container shadow-md rounded-md bg-white dark:bg-slate-800">
      <RenderEmployees />
    </div>
  </AuthenticatedLayout>
</template>
