<template>
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
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  components: { IconSearch, Logo },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    handleSearch() {
      console.log(this.searchText)
    }
  }
}
</script>
