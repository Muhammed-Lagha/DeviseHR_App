<script setup lang="ts">
import SettingsTaps from '@/components/Layout/Templates/Settings/SettingsTaps.vue'
import CompanySettings from '@/components/Layout/Templates/Settings/CompanySettings.vue'
import EmployeeSettings from '@/components/Layout/Templates/Settings/EmployeeSettings.vue'
import PermissionsSettings from './Settings/PermissionsSettings.vue'
</script>

<template>
  <div class="w-full bg-white dark:bg-[#0F0F0F]">
    <!-- Tabs -->
    <SettingsTaps />
    <div class="overflow-x-hidden overflow-y-auto h-fit transition-all py-0 px-4">
      <CompanySettings />
      <EmployeeSettings />
      <PermissionsSettings />
    </div>
  </div>
</template>
