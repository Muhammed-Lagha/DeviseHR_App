<script setup lang="ts">
import AuthenticatedLayout from '@/components/Layout/AuthenticatedLayout.vue'
import SettingsPage from '@/components/Layout/Templates/SettingsPage.vue'
</script>

<template>
  <AuthenticatedLayout>
    <div class="flex items-center justify-center gap-8 w-full h-fit p-4 dark:bg-[#0F0F0F]">
      <SettingsPage />
    </div>
  </AuthenticatedLayout>
</template>
