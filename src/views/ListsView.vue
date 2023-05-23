<template>
  <el-row>
    <el-col :span="24">
      <el-space direction="vertical" style="margin-top: 3rem; width: 100%" :fill="true">
        <el-text tag="b" style="font-size: 1.5rem">Lists</el-text>
        <div v-for="list in readLists" :key="list.id">
          <div class="bg-slate-100 hover:bg-slate-200 px-2 py-4 rounded-md">
            <router-link :to="Paths.LIST(list.id)" style="font-size: 1.125rem">{{
              list.name
            }}</router-link>
            <el-row :justify="'space-between'">
              <el-text>{{ list.posts.length }} stories</el-text>
              <el-button @click="handleDeleteList(list.id)" :icon="Delete" />
            </el-row>
          </div>
        </div>
      </el-space>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Paths } from '@/router/Paths'
import { Delete } from '@element-plus/icons-vue'
import { ListService } from '@/services/ListService'

const readLists = ListService.getAll()

const handleDeleteList = (id: string) => {
  ListService.delete(id)
}
</script>
