<template>
  <el-row :justify="'space-between'">
    <el-col :span="12">
      <el-row align="middle">
        <el-col :span="4">
          <router-link :to="{ path: Paths.POSTS }">
            <el-image src="/logo.png" :fit="'cover'" alt="logo" />
          </router-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="5" :pull="1">
      <el-row :justify="'space-between'">
        <el-col :span="2">
          <router-link :to="{ path: Paths.WRITE }">
            <el-button type="text" size="large" style="font-size: 1.125rem">Write</el-button>
          </router-link>
        </el-col>
        <el-col :span="1">
          <el-dropdown size="large">
            <el-row :align="'middle'" :gutter="40">
              <el-col :span="12">
                <el-avatar src="/avatar.png" />
              </el-col>
              <el-col :span="12">
                <el-icon class="el-icon--right"> <ArrowDown /></el-icon>
              </el-col>
            </el-row>
            <template #dropdown>
              <el-dropdown-menu style="width: 10rem">
                <el-dropdown-item>
                  <router-link :to="{ path: Paths.HOME }">Home</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link :to="{ path: Paths.POSTS }">Posts</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link :to="{ path: Paths.LISTS }">Lists</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { Paths } from '@/router/Paths'

export default {
  computed: {
    Paths() {
      return Paths
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
