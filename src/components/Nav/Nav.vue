<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router
  >
    <el-menu-item>Nia-Code</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="code">Code</el-menu-item>
    <el-menu-item index="about">About</el-menu-item>
  </el-menu>
</template>
<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
