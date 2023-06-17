<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('/home/default')
</script>
<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/home/default">Default</el-menu-item>
    <el-menu-item index="/home/safe">Safe</el-menu-item>
    <el-menu-item index="/home/lite">Lite</el-menu-item>
  </el-menu>
  <router-view />
</template>
