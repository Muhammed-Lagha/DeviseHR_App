<script setup lang="ts">
import AuthenticatedLayout from '@/components/Layout/AuthenticatedLayout.vue'
import { ScheduleXCalendar } from '@schedule-x/vue'
import { createCalendar, viewDay, viewWeek, viewMonthGrid } from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import CustomTimeGridEvent from '@/partials/Calender/CustomTimeGridEvent.vue'
//import CustomDateGridEvent from '@/partials/Calender/CustomDateGridEvent.vue'
import { useEventsStore } from '@/stores/events-store'

const eventsStore = useEventsStore()

const calendarApp = createCalendar({
  selectedDate: '2023-12-19',
  locale: 'en-UK',
  views: [viewDay, viewWeek, viewMonthGrid],
  defaultView: viewWeek.name,
  firstDayOfWeek: 0,
  plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
  events: [
    {
      id: 1,
      title: 'Event 1',
      start: '2023-12-19',
      end: '2023-12-19'
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2023-12-20 12:00',
      end: '2023-12-20 13:00'
    },
    {
      id: 3,
      title: 'Event 3',
      start: '2023-12-20 04:00',
      end: '2023-12-20 08:10'
    }
  ]
})

const customComponents = {
  timeGridEvent: CustomTimeGridEvent
  //dateGridEvent: CustomDateGridEvent,
}

// const toggleEvent = (id: number) => {
//   eventsStore.toggleEvent(id)
//   console.log(eventsStore.chosenEvents)
// }
</script>

<template>
  <AuthenticatedLayout>
    <div class="bg-white dark:bg-slate-800">
      Selected events: {{ eventsStore.chosenEvents.map((e) => e.id) }}

      <ScheduleXCalendar :calendar-app="calendarApp" :custom-components="customComponents">
        <template #dateGridEvent="{ calendarEvent }">
          <div :style="{ backgroundColor: 'green', color: 'white', width: '100%', height: '100%' }">
            {{ calendarEvent.title }}
            <input type="checkbox" @change="eventsStore.toggleEvent(calendarEvent.id)" />
          </div>
        </template>
      </ScheduleXCalendar>
    </div>
  </AuthenticatedLayout>
</template>
