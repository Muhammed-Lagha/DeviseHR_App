import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import CalendarView from '../views/CalenderView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { layout: "empty" },
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/employees',
      name: 'Employees',
      component: EmployeesView
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: CalendarView
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView
    }
  ]
})

export default router
