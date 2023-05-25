<template>
  <el-dialog v-model="dialogFormVisible" title="Create a new list">
    <el-input v-model="nameList" placeholder="Enter name" />
    <div style="margin-top: 2rem">
      <el-button type="primary" @click="handleSubmit"> Confirm </el-button>
      <el-button @click="handleCancel">Cancel</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ListService } from '@/services/ListService'
import { ref } from 'vue'
import type { List } from '@/models/List'

const dialogFormVisible = ref(false)
const nameList = ref<string>('')
const readLists = ref<List[]>(ListService.getAll())
const success = ref(false)
const emit = defineEmits(['success'])

const handleSubmit = () => {
  if (nameList.value.trim() !== '') {
    ListService.create({
      id: String(readLists.value?.length + 1),
      name: nameList.value,
      posts: []
    })
    success.value = true
  }
  emit('success', success.value)
  readLists.value = ListService.getAll()
  dialogFormVisible.value = false
  nameList.value = ''
}
const handleOpen = () => {
  dialogFormVisible.value = true
}
const handleCancel = () => {
  dialogFormVisible.value = false
  nameList.value = ''
}
defineExpose({
  handleOpen
})
</script>
