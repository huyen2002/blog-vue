<template>
  <!--  <router-link :to="{ path: Paths.HOME }" class="flex w-auto items-center justify-between">-->
  <!--    <img alt="Vue logo" class="object-cover" src="/logo.png" />-->
  <!--    <h1 class="font-pacifico not-italic leading-7 text-black/80 md:text-4xl lg:text-5xl">-->
  <!--      Infinity-->
  <!--    </h1>-->
  <!--  </router-link>-->
  <el-row>
    <el-col>
      <router-link :to="{ path: Paths.HOME }">
        <el-row :justify="'center'" :align="'middle'">
          <el-col :span="9">
            <img alt="logo" src="/logo.png" class="logo" />
          </el-col>
          <el-col :span="12"> <h1 class="blog_name">Infinity</h1></el-col>
        </el-row>
      </router-link>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { Paths } from '@/router/Paths'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&family=Poppins:wght@200&family=Quicksand&display=swap');

.logo {
  object-fit: cover;
}
.blog_name {
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  line-height: 1.75rem;
}
</style>
