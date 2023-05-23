<template>
  <!--  <div class="h-screen max-w-full bg-white">-->
  <!--    <div class="m-5 h-screen max-w-full bg-white md:mx-16 xl:mx-32">-->
  <!--      <NavbarDetail />-->
  <!--      <RouterView />-->
  <!--    </div>-->
  <!--  </div>-->
  <el-row>
    <el-col :span="22" :push="1" :pull="1"
      ><div style="margin-top: 2rem">
        <NavbarDetail />
        <RouterView /></div
    ></el-col>
  </el-row>
</template>
<script setup>
import NavbarDetail from '@/components/NavbarDetail.vue'
</script>
<style>
.root {
  //margin: 20px 80px;
}
</style>
