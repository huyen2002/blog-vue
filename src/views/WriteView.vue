<template>
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
      >
        <el-form-item label="Title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="form.description" />
        </el-form-item>
        <el-form-item label="Content">
          <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item label="Topic">
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
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { useRouter } from 'vue-router'
import { PostService } from '@/services/PostService'
import topics from '@/assets/topics'

const form = reactive({
  title: '',
  description: '',
  content: '',
  topic: ''
})
const router = useRouter()
const onSubmit = () => {
  PostService.create(form.title, form.description, form.content, form.topic)
  router.push('/posts')
}
</script>
