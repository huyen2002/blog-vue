<template>
  <div class="w-full flex items-center justify-between">
    <img src="/logo.png" alt="Vue logo" class="object-cover" />
    <div class="relative">
      <button @click="show = !show" class="">
        <img src="/avatar.png" alt="avatar" class="object-cover h-12 w-12 rounded-full" />
      </button>
      <Transition>
        <div v-if="show" class="absolute right-0 mt-5 rounded-md w-56 shadow-lg">
          <router-link
            :to="{ name: 'Home' }"
            class="block px-4 py-2 text-sm text-textNavbar hover:bg-slate-100"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'Posts' }"
            class="block px-4 py-2 text-sm text-textNavbar hover:bg-slate-100"
          >
            Posts
          </router-link>
          <router-link
            :to="{ name: 'Lists' }"
            class="block px-4 py-2 text-sm text-textNavbar hover:bg-slate-100"
          >
            Lists
          </router-link>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
