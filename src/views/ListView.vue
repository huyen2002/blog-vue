<template>
  <el-row style="margin-top: 5rem">
    <el-col>
      <el-text tag="b" style="font-size: 1.5rem">{{ readList?.name }}</el-text>
    </el-col>
    <el-col>
      <el-text>{{ readList?.posts.length }} stories</el-text>
    </el-col>
    <el-col>
      <el-row
        v-for="post in posts"
        :key="post.id"
        style="
          background: lightsteelblue;
          padding: 1.5rem 1rem;
          border-radius: 0.375rem;
          margin: 1rem 0;
        "
      >
        <el-col>
          <router-link :to="Paths.POST(post.id)">
            <el-text tag="b" style="font-size: 1.125rem">{{ post.title }}</el-text>
          </router-link>
        </el-col>
        <el-col>
          <el-text>{{ post.updatedAt }}</el-text>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ListService } from '@/services/ListService'
import { Paths } from '@/router/Paths'
const route = useRoute()
const readList = ListService.getOneWhereId(route.params.id as string)
const posts = ListService.getPostsForList(String(route.params.id))
</script>
