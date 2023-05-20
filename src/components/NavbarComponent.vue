<template>
  <div class="flex justify-between items-center">
    <div class="w-full flex items-center gap-4">
      <img src="/logo.png" alt="Vue logo" class="object-cover" />
      <div class="flex px-2 gap-2 items-center bg-slate-100 rounded-2xl">
        <IconSearch />
        <input
          class="w-full rounded-lg outline-none bg-transparent p-2"
          placeholder="Search"
          type="text"
          v-model="searchText"
          @keydown.enter="handleSearch"
        />
      </div>
    </div>
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

  <!-- Add this button -->
</template>

<script lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  components: { IconSearch },
  data() {
    return {
      searchText: '',
      show: false
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchText)
      this.searchText = ''
    }
  }
}
</script>
