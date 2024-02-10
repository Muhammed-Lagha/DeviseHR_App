<script setup lang="ts">
import SearchForm from '@/components/Utils/SearchForm.vue'
import GenerateImage from '@/partials/GenerateImage.vue'
import { computed, ref } from 'vue'
const data = ref([
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@me.com',
    job_title: 'Developer',
    phone: '1234567890',
    profile_picture: '',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 2,
    first_name: 'karen',
    last_name: 'Doe',
    email: 'karendoe@me.com',
    job_title: 'Tech Lead',
    phone: '1234567890',
    profile_picture: '',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 3,
    first_name: 'henry',
    last_name: 'Doe',
    email: 'henry@me.com',
    job_title: 'Software Engineer',
    phone: '1234567890',
    profile_picture: '',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 4,
    first_name: 'mark',
    last_name: 'Doe',
    email: 'markdoe@me.com',
    job_title: 'Project Manager',
    phone: '1234567890',
    profile_picture:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
    role: 'Employee',
    status: 'Active'
  },
  {
    id: 5,
    first_name: 'sarah',
    last_name: 'Doe',
    email: 'sarahdoe@me.com',
    job_title: 'Project Manager',
    phone: '1234567890',
    profile_picture: '',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 6,
    first_name: 'sarah',
    last_name: 'Doe',
    email: 'sarahdoe@me.com',
    job_title: 'Project Manager',
    phone: '1234567890',
    profile_picture: '',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 7,
    first_name: 'sarah',
    last_name: 'Doe',
    email: 'sarahdoe@me.com',
    job_title: 'Project Manager',
    phone: '1234567890',
    profile_picture: '',
    role: 'Admin',
    status: 'Active'
  }
])

const searchFilter = ref('')

const filterItem = computed(() => {
  if (!searchFilter.value) return data.value
  return data.value.filter(
    (item) =>
      item.first_name.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      item.job_title.toLowerCase().includes(searchFilter.value.toLowerCase())
  )
})
const HandleSearch = (search: string) => {
  searchFilter.value = search
}
</script>

<template>
  <div class="bg-white relative dark:bg-slate-800 rounded-md">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
      <SearchForm @search="HandleSearch" />
      <div class="flex items-center justify-end text-sm font-semibold">
        <!-- Radio Buttons -->
        <!-- List of Filters -->
      </div>
    </div>
    <!-- employees cards -->
    <div class="flex flex-wrap mx-3">
      <el-row>
        <el-col :span="6" v-for="(u, index) in filterItem" :key="index" class="mx-6 my-3">
          <el-card
            class="w-full min-w-80 px-2 mx-6 sm:w-1/2 xl:w-1/3 border border-slate-200 dark:border-slate-700 dark:bg-slate-800"
            shadow="hover"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                <div v-if="u.profile_picture.length > 0 ? 'hidden' : 'block'">
                  <GenerateImage
                    :class="u.profile_picture.length > 0 ? 'hidden' : 'block'"
                    :firstName="u.first_name"
                    :lastName="u.last_name"
                  />
                </div>
                <img
                  :class="u.profile_picture.length > 0 ? 'block' : 'hidden'"
                  class="w-10 h-10 rounded-full"
                  :src="u.profile_picture"
                  alt="user"
                />
              </div>
              <div class="ml-3">
                <div class="text-sm font-semibold dark:text-gray-100">
                  {{ u.first_name }} {{ u.last_name }}
                </div>
                <div class="text-xs text-slate-400">{{ u.job_title }}</div>
              </div>
            </div>
            <div class="flex items-center justify-end">
              <el-button
                type="primary"
                size="small"
                class="text-xs"
                :class="u.status === 'Active' ? 'hidden' : 'block'"
              >
                {{ u.status }}
              </el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
