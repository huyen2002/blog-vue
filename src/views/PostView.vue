<template>
  <SuccessAlertComponent ref="successAlert" />
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
                <el-button text @click="handleDialogOpen"> Create a new list </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <DialogComponent ref="dialog" @success="updateIsSuccess" />
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
import DialogComponent from '@/components/icons/DialogComponent.vue'
import SuccessAlertComponent from '@/components/SuccessAlertComponent.vue'

const route = useRoute()
const dialog = ref()
const successAlert = ref()
const isSuccess = ref(false)
const handleDialogOpen = () => {
  console.log(dialog.value)
  dialog.value.handleOpen()
}
const post = PostService.getPostById(String(route.params.id))
const selectedCheckbox = ref<string[]>(post?.lists ?? [])
const readLists = ref<List[]>(ListService.getAll())

const handleChecked = (id: string) => {
  PostService.bookmarkPost(post?.id as string, id)
  ListService.bookmarkList(post?.id as string, id)
}
const updateIsSuccess = () => {
  isSuccess.value = true
  successAlert.value.handleShow()
  readLists.value = ListService.getAll()
}
onMounted(() => {
  selectedCheckbox.value = post?.lists ?? []
})
</script>
