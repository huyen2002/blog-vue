<template>
  <h1>Post Detail</h1>
  <h2>{{ post?.title }}</h2>
  <p>{{ post?.content }}</p>
</template>

<script lang="ts">
import posts from '@/assets/posts'
import { type Post } from '@/models/Post'
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      posts: posts,
      post: undefined as Post | undefined
    }
  },
  mounted() {
    const route = useRoute()
    this.post = this.posts.find((post) => post.id === String(route.params.id))
  }
}
</script>
