import { useDark } from '@vueuse/core'
const isDark = useDark({
  selector: 'html'
})

export function useDarkMode() {
  return {
    isDark
  }
}