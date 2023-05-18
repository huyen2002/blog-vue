<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <div>
      <div class="flex justify-between">
        <Logo />
        <div class="flex gap-10 font-montserrat items-center">
          <button class="text-lg">Sign in</button>
          <button class="text-lg px-2 h-10 text-white bg-button hover:bg-buttonHover rounded-3xl">
            Sign up
          </button>
        </div>
      </div>

      <main>
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'About' }">About</router-link>
            </li>
            <router-view />
          </ul>
        </nav>

        <div class="flex h-[calc(100vh-7rem)] max-w-full items-center pb-20">
          <div class="">
            <div class="w-2/5">
              <span class="text-3xl font-bold text-black/80 sm:text-5xl lg:text-7xl">
                Growing unstoppably
              </span>
            </div>

            <span
              class="mt-5 inline-block font-montserrat text-lg font-normal text-black/80 sm:mt-10 sm:text-xl lg:text-2xl"
            >
              Discover stories and expand your knowledge about more fields
            </span>
          </div>
        </div>
      </main>
    </div>
  </DefaultLayout>
</template>
