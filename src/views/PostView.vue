<template>
  <NavbarDetail />
  <div class="mt-20">
    <div class="flex justify-between">
      <div class="flex gap-5">
        <img :src="post?.avatar" alt="avatar" class="h-10 w-10 rounded-full" />
        <div>
          <h2 class="font-semibold text-lg">{{ post?.author }}</h2>
          <p class="text-textBio text-base">{{ post?.updatedAt }}</p>
        </div>
      </div>
      <div class="relative">
        <button @click="show = !show">
          <BookmarkFillIcon v-if="selectedCheckbox.length !== 0" />
          <BookmarkIcon v-else />
        </button>
        <Transition>
          <div
            v-if="show"
            class="absolute right-0 mt-5 bg-white px-2 py-4 rounded-md w-56 shadow-lg"
          >
            <h1 class="text-base font-semibold">Select read list</h1>
            <div>
              <div
                v-for="readList in readLists"
                :key="readList.id"
                class="flex items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  :checked="isChecked(readList.id)"
                  @change="handleChecked(readList.id)"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label for="{{readList.name}}" class="ml-2 block text-sm leading-5 text-textNavbar">
                  {{ readList.name }}
                </label>
              </div>
            </div>
            <button @click="showDialog = true" class="text-buttonHover font-semibold">
              Create new list
            </button>
            <PopupComponent
              v-if="showDialog"
              :handleSuccess="handleSuccess"
              :handleCancel="handleCancel"
            >
              <h1 class="text-lg font-semibold">Create new list</h1>
              <label for="{{nameList}}" class="text-textNavbar"> Enter name:</label>
              <input
                type="text"
                required
                v-model="nameList"
                class="rounded-md outline-none border p-2 text-textNavbar"
              />
            </PopupComponent>
          </div>
        </Transition>
      </div>
    </div>
    <div class="mt-10">
      <h1 class="text-3xl font-bold">{{ post?.title }}</h1>
      <p class="mt-10 text-base text-textNavbar">{{ post?.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import posts from '@/assets/posts'
import lists from '@/assets/lists'
import { type Post } from '@/models/Post'
import { useRoute } from 'vue-router'
import NavbarDetail from '@/components/NavbarDetail.vue'
import BookmarkIcon from '@/components/icons/BookmarkIcon.vue'
import BookmarkFillIcon from '@/components/icons/BookmarkFillIcon.vue'
import { onMounted, type Ref, ref, watch } from 'vue'
import type { List } from '@/models/List'
import PopupComponent from '@/components/PopupComponent.vue'

const route = useRoute()
const post = ref<Post | undefined>(posts.find((post) => post.id === String(route.params.id)))

const selectedCheckbox = ref<string[]>(post.value?.lists ?? [])

const show = ref<boolean>(false)
const showDialog = ref<boolean>(false)
const nameList = ref<string>('')
const readLists = ref<List[]>(lists)

const allPosts = ref<Post[]>([])
const isChecked = (id: string) => {
  return selectedCheckbox.value.includes(id)
}
const handleChecked = (id: string) => {
  if (selectedCheckbox.value.includes(id)) {
    selectedCheckbox.value = selectedCheckbox.value.filter((item) => item !== id)

    readLists.value = readLists.value.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          posts: list.posts.filter((postId) => postId !== post.value?.id)
        }
      }
      return list
    })
  } else {
    selectedCheckbox.value.push(id)
    readLists.value = readLists.value.map((list) => {
      if (list.id === id && !list.posts.includes(post.value?.id as string)) {
        return {
          ...list,
          posts: [...list.posts, post.value?.id] as string[]
        }
      }
      return list
    })
  }
  if (post.value) {
    post.value.lists = selectedCheckbox.value
  }
  allPosts.value = allPosts.value.map((post) => {
    if (post.id === String(route.params.id)) {
      return {
        ...post,
        lists: selectedCheckbox.value
      }
    }
    return post
  })
}
const handleSuccess = () => {
  if (nameList.value.trim() !== '') {
    readLists.value.push({
      id: String(readLists.value.length + 1),
      name: nameList.value,
      posts: []
    })
  }

  console.log('add list')
  showDialog.value = false
  nameList.value = ''
}
const handleCancel = () => {
  showDialog.value = false
  console.log('cancel')
}

watch(
  readLists,
  (newVal: Ref<List[]>) => {
    localStorage.setItem('readLists', JSON.stringify(newVal))
  },
  { deep: true }
)

watch(allPosts, (newVal: Ref<Post[]>) => {
  localStorage.setItem('posts', JSON.stringify(newVal))
})

onMounted(() => {
  if (localStorage.getItem('readLists')) {
    readLists.value = JSON.parse(localStorage.getItem('readLists') as string) || []
  }
  if (localStorage.getItem('posts')) {
    allPosts.value = JSON.parse(localStorage.getItem('posts') as string) || []
  }
})
</script>
