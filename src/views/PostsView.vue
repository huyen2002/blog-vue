<template>
  <NavbarComponent @search="getSearchText" />
  <div class="flex gap-4 my-10">
    <div v-for="topic in topicsArr" :key="topic.id">
      <button
        @click="handleTopicClick(topic)"
        class="bg-slate-100 hover:bg-slate-200 p-2 rounded-xl text-textBio"
        :class="{ 'bg-slate-200': activeTopic === topic.id }"
      >
        {{ topic.name }}
      </button>
    </div>
  </div>

  <div class="flex flex-col gap-8">
    <div v-for="post in postsArr" :key="post.id">
      <div class="flex gap-5">
        <img :src="post.avatar" alt="avatar" class="h-10 w-10 rounded-full" />
        <div>
          <h2 class="font-semibold text-lg">{{ post.author }}</h2>
          <p class="text-textBio text-base">{{ post.updatedAt }}</p>
        </div>
      </div>
      <router-link :to="/post/ + post.id">
        <h2 class="font-semibold text-lg">{{ post.title }}</h2>
        <p class="text-textBio text-sm">{{ post.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import posts from '@/assets/posts'
import topics from '@/assets/topics'
import { onMounted, ref, watch } from 'vue'
import type { Topic } from '@/models/Topic'
import type { Post } from '@/models/Post'
import NavbarComponent from '@/components/NavbarComponent.vue'

const allPosts = ref<Post[]>([])
const postsArr = ref<Post[]>(posts.filter((post) => post.topic === topics[0].name))

const topicsArr = ref<Topic[]>([])
const topic = ref<Topic>(topics[0])
const activeTopic = ref<string>(topics[0].id)
const searchText = ref<string>('')

const handleTopicClick = (item: Topic) => {
  topic.value = item
  activeTopic.value = item.id
  console.log(activeTopic.value)
}
const getSearchText = (input: string) => {
  searchText.value = input
}
watch(allPosts, () => {
  localStorage.setItem('posts', JSON.stringify(allPosts.value))
})

watch(topic, () => {
  postsArr.value = posts.filter((post) => post.topic === topic.value.name)
  activeTopic.value = topic.value.id
  localStorage.setItem('topics', JSON.stringify(topicsArr.value))
})

watch(searchText, () => {
  postsArr.value = posts.filter((post) =>
    post.title.toLowerCase().startsWith(searchText.value.toLowerCase())
  )
})

onMounted(() => {
  localStorage.setItem('posts', JSON.stringify(posts))
  localStorage.setItem('topics', JSON.stringify(topics))
  allPosts.value = localStorage.getItem('posts')
    ? (JSON.parse(localStorage.getItem('posts') as string) as Post[])
    : posts
  topicsArr.value = localStorage.getItem('topics')
    ? (JSON.parse(localStorage.getItem('topics') as string) as Topic[])
    : topics
})
</script>
