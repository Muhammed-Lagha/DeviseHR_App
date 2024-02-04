<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  console.log(email.value, password.value)
}
</script>

<template>
  <div class="relative grid grid-cols-[4fr_4fr] max-w-full mx-auto my-0">
    <div class="h-screen flex flex-col items-center justify-start pl-8 pr-12 pt-[84px] pb-12">
      <div class="flex flex-col items-center gap-8 max-w-[460px] w-full h-fit px-8 py-8">
        <div class="flex w-full flex-col gap-2">
          <h1>Login to DeviseHR</h1>
          <p>Please enter your details!</p>
        </div>
        <form class="flex flex-col relative gap-4 justify-start" @submit.prevent="login">
          <div class="relative">
            <label class="text-[#1d1d1d] text-sm font-semibold tracking-[0.03rem] z-10" for="email"
              >Email:</label
            >
            <input
              class="text-[#1d1d1d] text-base font-medium max-w-full w-full border h-[50px] outline-none tracking-[0.03rem] bg-transparent transition-[0.25s] indent-[20px] mt-2 rounded-lg border-solid border-[#1d1d1d] focus:border focus:border-solid focus:border-[#4978f0]"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute w-[30px] h-[30px] -translate-x-2/4 -translate-y-2/4 origin-center -right-0.5 -bottom-1"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 11L3 6v10h10v2H3q-.825 0-1.412-.587T1 16V4q0-.825.588-1.412T3 2h16q.825 0 1.413.588T21 4v5h-2V6zm0-2l8-5H3zm8 13q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11q1.05 0 1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13q-.2 0-.35.15t-.15.35V18q0 .825.588 1.413T19 20q.825 0 1.413-.587T21 18v-4h2v4q0 1.65-1.175 2.825T19 22M3 6V4v12z"
              />
            </svg>
          </div>
          <div class="relative">
            <label
              class="text-[#1d1d1d] text-sm font-semibold tracking-[0.03rem] z-10"
              for="password"
              >Password:</label
            >
            <input
              class="text-[#1d1d1d] text-base font-medium max-w-full w-full border h-[50px] outline-none tracking-[0.03rem] bg-transparent transition-[0.25s] indent-[20px] mt-2 rounded-lg border-solid border-[#1d1d1d] focus:border focus:border-solid focus:border-[#4978f0]"
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
              title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute w-[30px] h-[30px] -translate-x-2/4 -translate-y-2/4 origin-center -right-0.5 -bottom-1"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M48 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m84 54.5l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.5a8 8 0 0 0-5 15.22l20 6.49l-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17l12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17l20-6.49A8 8 0 0 0 132 110.5m106 5.14a8 8 0 0 0-10-5.14l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.49a8 8 0 0 0-4.95 15.22l20 6.49l-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17l12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17l20-6.49a8 8 0 0 0 5.07-10.09"
              />
            </svg>
          </div>
          <input
            type="submit"
            class="bg-[#4978f0] text-[white] whitespace-nowrap flex justify-center items-center leading-[50px] text-lg tracking-wide no-underline cursor-pointer font-extrabold min-h-[50px] w-full shadow-[0_5px_10px_rgba(0,0,0,0.15)] transition-all duration-[0.3s] ease-[ease] mt-4 rounded-lg border-none outline-none"
            value="Login"
          />
          <div class="flex flex-col text-[#1d1d1d] gap-4 mt-2">
            <div class="flex justify-between">
              <span>Did you forget your password?</span>
              <a
                class="text-[#1d1d1d] font-semibold no-underline hover:underline"
                href="#"
                title="Reset Password"
              >
                Reset Password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      class="h-screen w-full text-[#401b3d] flex overflow-hidden flex-col justify-start bg-[#f4f1ff] px-12 py-12"
    >
      <div class="flex flex-col justify-between max-w-[360px] mb-10">
        <h2 class="text-[#1f2346] text-3xl font-semibold mb-3">DeviseHR</h2>
        <p class="text-lg">Where Simplicity meets Customizability</p>
      </div>
      <img src="../assets/undraw_Multitasking_re_ffpb.png" alt="Mock" class="pt-13 w-full h-full" />
    </div>
  </div>
</template>
