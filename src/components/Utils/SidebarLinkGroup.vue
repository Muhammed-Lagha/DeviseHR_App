<template>
  <li class="px-3 py-2 rounded-md mb-0.5 last:mb-0" :class="activeCondition && 'bg-neutral-900'">
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  activeCondition: {
    type: Boolean,
    default: false
  }
})

const expanded = ref(props.activeCondition)

const handleClick = () => {
  expanded.value = !expanded.value
}
</script>
