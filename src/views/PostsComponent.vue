<template>
  <Navbar />
  <div class="flex gap-4 my-10">
    <div v-for="topic in topics" :key="topic.id">
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
    <div v-for="post in posts" :key="post.id">
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
<script lang="ts">
import posts from '@/assets/posts'
import Navbar from '@/components/Navbar.vue'
import topics from '@/assets/topics'
import type { Topic } from '@/models/Topic'

export default {
  components: { Navbar },
  data() {
    return {
      posts: posts.filter((post) => post.topic === topics[0].name),
      topics: topics,
      topic: topics[0],
      activeTopic: topics[0].id
    }
  },
  methods: {
    handleTopicClick(topic: Topic) {
      this.topic = topic
      this.activeTopic = topic.id
      console.log(this.activeTopic)
    }
  },
  watch: {
    topic() {
      this.posts = posts.filter((post) => post.topic === this.topic.name)
      this.activeTopic = this.topic.id
    }
  }
}
</script>
