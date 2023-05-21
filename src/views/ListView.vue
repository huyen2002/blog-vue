<template>
  <NavbarDetail />
  <div class="mt-20 flex flex-col gap-5">
    <h1 class="text-2xl font-bold">{{ readList?.name }}</h1>
    <p class="text-textBio text-base">{{ readList?.posts.length }} stories</p>
  </div>
</template>
<script lang="ts" setup>
import NavbarDetail from '@/components/NavbarDetail.vue'
import { ref } from 'vue'
import type { List } from '@/models/List'
import lists from '@/assets/lists'
import { useRoute } from 'vue-router'

const route = useRoute()
const readList = ref<List | undefined>(lists.find((list) => list.id === String(route.params.id)))
</script>
