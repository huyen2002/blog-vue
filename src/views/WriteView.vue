<template>
  <el-alert
    title="success"
    type="success"
    description="Create post successfully"
    show-icon
    @close="handleClose"
    v-model="showSuccess"
    v-if="showSuccess"
  />
  <el-alert
    title="error alert"
    type="error"
    description="Error to create post"
    show-icon
    @close="resetForm(ruleFormRef)"
    v-model="showError"
    v-if="showError"
  />

  <div style="margin: 2rem 1rem">
    <el-text tag="b" style="font-size: 1.25rem"> Write</el-text>
  </div>
  <el-row>
    <el-col :span="15">
      <el-form
        :model="form"
        label-width="120px"
        :size="'large'"
        style="display: flex; flex-direction: column; gap: 1rem"
        ref="ruleFormRef"
        :rules="rules"
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="form.description" />
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item label="Topic" prop="topic">
          <el-select v-model="form.topic" placeholder="Select">
            <el-option
              v-for="item in topics"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(ruleFormRef)" v-if="!load">Create</el-button>
          <el-button type="primary" loading ref="load" v-if="load">Loading</el-button>
          <el-button @click="resetForm(ruleFormRef)">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import { useRouter } from 'vue-router'
import { PostService } from '@/services/PostService'
import topics from '@/assets/topics'
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive({
  title: '',
  description: '',
  content: '',
  topic: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  title: [{ required: true, message: 'Please input title', trigger: 'blur' }],
  description: [{ required: true, message: 'Please input description', trigger: 'blur' }],
  content: [{ required: true, message: 'Please input content', trigger: 'blur' }],
  topic: [{ required: true, message: 'Please select topic', trigger: 'change' }]
})

const load = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const router = useRouter()
const handleClose = async () => {
  await router.push('/posts')
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  load.value = true
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      PostService.create(form.title, form.description, form.content, form.topic)
      formEl.resetFields()
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  load.value = false
}
</script>
