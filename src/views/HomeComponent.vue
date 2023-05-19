<template>
    <div>
        <div class="flex justify-between">
      <Logo />
      <div class="flex gap-10 font-montserrat items-center">
        <router-link :to="{ name: 'Posts' }" class="text-lg">Sign in</router-link>
        <button class="text-lg px-2 h-10 text-white bg-button hover:bg-buttonHover rounded-3xl">
          Sign up
        </button>
      </div>
    </div>

    <main>
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
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'

export default {
  components: { Logo },

}
</script>
