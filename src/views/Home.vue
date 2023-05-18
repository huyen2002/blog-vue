<template>
    <h1>This is Home Page</h1>
    <div v-for="post in posts" :key="post.id">
        <router-link :to="/post/+post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
        </router-link>

    </div>
</template>
<script>
import posts from "@/assets/data/posts";

export default {
    data() {
        return {
            posts: posts,
        }
    }
}

</script>
