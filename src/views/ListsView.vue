<template>
  <NavbarDetail />
  <div class="mt-10 flex flex-col gap-5">
    <h1 class="text-2xl font-bold text-textNavbar">Lists</h1>
    <div v-for="list in readLists" :key="list.id">
      <div class="bg-slate-100 hover:bg-slate-200 px-2 py-4 rounded-md">
        <h2 class="text-lg hover:underline font-semibold">{{ list.name }}</h2>
        <p class="text-textBio text-sm">{{ list.posts.length }} stories</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavbarDetail from '@/components/NavbarDetail.vue'
import type { List } from '@/models/List'
import { onMounted, ref } from 'vue'
import lists from '@/assets/lists'

const readLists = ref<List[]>(lists)
onMounted(() => {
  readLists.value = localStorage.getItem('readLists')
    ? (JSON.parse(localStorage.getItem('readLists') as string) as List[])
    : []
})
</script>
