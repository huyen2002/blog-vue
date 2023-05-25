<template>
  <el-alert
    title="success"
    type="success"
    description="more text description"
    show-icon
    v-model="show"
    v-if="show"
  />
</template>
<script lang="ts" setup>
import { defineExpose, ref } from 'vue'
const show = ref(false)
const handleShow = () => {
  show.value = true
}
defineExpose({
  handleShow
})
</script>
