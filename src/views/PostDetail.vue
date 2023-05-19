<template>
  <Navbar />
  <div>
    <div>
      <div class="flex gap-5">
        <img :src="post?.avatar" alt="avatar" class="h-10 w-10 rounded-full" />
        <div>
          <h2 class="font-semibold text-lg">{{ post?.author }}</h2>
          <p class="text-textBio text-base">{{ post?.updatedAt }}</p>
        </div>
      </div>
    </div>
    <div class="">
      <h1 class="text-xl font-bold">{{ post?.title }}</h1>
      <p class="mt-10 text-base text-textNavbar">{{ post?.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import posts from '@/assets/posts'
import { type Post } from '@/models/Post'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
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
