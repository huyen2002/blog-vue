<template>
    <h1>Post Detail</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
</template>
<script>
import {useRoute} from "vue-router";
import posts from "@/assets/data/posts";

export default {
    data() {
        return {
            posts: posts,
            post: {}
        }
    },
    mounted() {
        const route = useRoute()
        this.post = this.posts.find(post => post.id === String(route.params.id))
    }
}
</script>
