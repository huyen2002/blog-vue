<template>
  <h1>This is Home Page</h1>
  <div v-for="post in posts" :key="post.id">
    <router-link :to="/post/ + post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </router-link>
  </div>
</template>
<script lang="ts">
import posts from '@/assets/posts'

export default {
  data() {
    return {
      posts: posts
    }
  }
}
</script>
