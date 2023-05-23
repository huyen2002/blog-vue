<template>
  <div class="mt-20">
    <el-row :justify="'space-between'">
      <el-col :span="20">
        <el-row :align="'middle'">
          <el-col :span="1">
            <el-avatar :src="post?.avatar" alt="avatar" />
          </el-col>
          <el-col :span="10">
            <el-row
              ><el-col>
                <el-text tag="b" style="font-size: 1.25rem">{{ post?.author }}</el-text>
              </el-col>
              <el-col>
                <el-text>{{ post?.updatedAt }}</el-text>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="4">
        <el-dropdown :hide-on-click="false">
          <el-button type="primary">
            Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-checkbox-group
                  v-model="selectedCheckbox"
                  style="display: flex; flex-direction: column"
                >
                  <el-checkbox
                    v-for="list in readLists"
                    :key="list.id"
                    :label="list.id"
                    :checked="selectedCheckbox.includes(list.id)"
                    @change="handleChecked(list.id)"
                    >{{ list.name }}</el-checkbox
                  >
                </el-checkbox-group>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button text @click="dialogFormVisible = true"> Create a new list </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dialog v-model="dialogFormVisible" title="Create a new list">
          <el-input v-model="nameList" placeholder="Enter name" />
          <div style="margin-top: 2rem">
            <el-button type="primary" @click="handleSuccess"> Confirm </el-button>
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <div style="margin-top: 2rem">
      <h1 style="font-size: 2rem; font-weight: bold">{{ post?.title }}</h1>
      <p style="margin-top: 2rem; font-size: 1rem">{{ post?.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { PostService } from '@/services/PostService'
import { ListService } from '@/services/ListService'
import type { List } from '@/models/List'

const route = useRoute()
const dialogFormVisible = ref(false)
const post = PostService.getPostById(String(route.params.id))

const selectedCheckbox = ref<string[]>(post?.lists ?? [])
const nameList = ref<string>('')
const readLists = ref<List[]>(ListService.getAll())

const handleChecked = (id: string) => {
  PostService.bookmarkPost(post?.id as string, id)
  ListService.bookmarkList(post?.id as string, id)
}
const handleSuccess = () => {
  if (nameList.value.trim() !== '') {
    ListService.create({
      id: String(readLists.value?.length + 1),
      name: nameList.value,
      posts: []
    })
  }
  readLists.value = ListService.getAll()
  dialogFormVisible.value = false
  nameList.value = ''
}

onMounted(() => {
  selectedCheckbox.value = post?.lists ?? []
})
</script>
