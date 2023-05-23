<template>
  <DefaultLayout>
    <NavbarComponent @search="updateSearchText" />
    <el-row style="margin: 2rem 0">
      <div v-for="topic in topics" :key="topic.id" style="margin: 1rem">
        <el-button
          @click="handleTopicClick(topic)"
          :style="activeTopic === topic.id ? 'background-color: #409eff; color: white' : ''"
        >
          {{ topic.name }}
        </el-button>
      </div>
    </el-row>

    <el-space direction="vertical">
      <div v-for="post in postsArr" :key="post.id" style="margin: 1rem 0">
        <el-row :gutter="10" :align="'middle'">
          <el-col :span="1">
            <el-avatar :src="post.avatar" alt="avatar" />
          </el-col>
          <el-col :span="10">
            <el-row>
              <el-col>
                <el-text tag="b" style="font-size: 1.125rem">{{ post.author }}</el-text>
              </el-col>
              <el-col>
                <el-text style="font-size: 1rem">{{ post.updatedAt }}</el-text>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <router-link :to="Paths.POST(post.id)">
          <el-row>
            <el-col>
              <el-text tag="b" style="font-size: 1.125rem">{{ post.title }}</el-text>
            </el-col>
            <el-col>
              <el-text>{{ post.description }}</el-text>
            </el-col>
          </el-row>
        </router-link>
      </div>
    </el-space>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import topics from '@/assets/topics'
import { onMounted, ref, watch } from 'vue'
import type { Topic } from '@/models/Topic'
import type { Post } from '@/models/Post'
import NavbarComponent from '@/components/NavbarComponent.vue'
import { Paths } from '@/router/Paths'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { PostService } from '@/services/PostService'

const allPosts = PostService.getAll()
const postsArr = ref<Post[]>([])
const activeTopic = ref<string>(topics[0].id)
const searchText = ref<string>('')

const handleTopicClick = (topic: Topic) => {
  activeTopic.value = topic.id
  postsArr.value = PostService.getPostsByTopic(topic.name)
}
const updateSearchText = (input: string) => {
  searchText.value = input
}

watch(searchText, () => {
  postsArr.value = allPosts.filter((post) =>
    post.title.toLowerCase().startsWith(searchText.value.toLowerCase())
  )
})

onMounted(() => {
  postsArr.value = PostService.getPostsByTopic(topics[0].name)
})
</script>
