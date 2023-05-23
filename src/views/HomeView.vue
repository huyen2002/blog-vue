<template>
  <DefaultLayout>
    <div>
      <el-row :justify="'space-between'">
        <el-col :span="5">
          <LogoComponent />
        </el-col>
        <el-col :span="5">
          <el-row :justify="'center'" gutter="100">
            <el-col :span="12">
              <el-button link>
                <router-link :to="{ path: Paths.POSTS }" class="text-lg">Sign in</router-link>
              </el-button>
            </el-col>

            <el-col :span="12">
              <el-button type="primary" round> Sign up </el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <main>
        <el-row
          :align="'middle'"
          style="height: calc(100vh - 7rem); max-width: 100%; padding-bottom: 5rem"
        >
          <el-col :span="24" class="">
            <div class="w-2/5">
              <span class="text-3xl font-bold text-black/80 sm:text-5xl lg:text-7xl">
                Growing unstoppably
              </span>
            </div>

            <span
              class="mt-5 inline-block font-montserrat text-lg font-normal text-black/80 sm:mt-10 sm:text-xl lg:text-2xl"
            >
              Discover stories and expand your knowledge about more fields
            </span>
          </el-col>
        </el-row>
      </main>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import LogoComponent from '@/components/LogoComponent.vue'
import { Paths } from '@/router/Paths'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  computed: {
    Paths() {
      return Paths
    }
  },
  components: { DefaultLayout, LogoComponent }
}
</script>
