<template>
  <el-row :justify="'space-between'">
    <el-col :span="15">
      <el-row align="middle">
        <el-col :span="4">
          <!--          <img src="/logo.png" alt="Vue logo" class="object-cover" />-->
          <el-image src="/logo.png" :fit="'cover'" alt="logo" />
        </el-col>

        <el-col :span="15">
          <el-row :align="'middle'" :gutter="30">
            <el-col :span="1">
              <IconSearch />
            </el-col>
            <el-col :span="10">
              <el-input
                placeholder="Search"
                type="text"
                v-model="searchText"
                @keydown.enter="handleSearch"
              />
            </el-col>
          </el-row>
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
        <el-col :span="2">
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

  <!-- Add this button -->
</template>

<script lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
import { Paths } from '@/router/Paths'
import { ArrowDown } from '@element-plus/icons-vue'
export default {
  computed: {
    Paths() {
      return Paths
    }
  },
  components: { ArrowDown, IconSearch },
  data() {
    return {
      searchText: '',
      show: false
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchText)
      this.searchText = ''
    }
  }
}
</script>
<style scoped></style>
