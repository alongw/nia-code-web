<script lang="ts" setup>
import Nav from '@/components/Nav/Nav.vue'
</script>

<template>
  <Nav />
  <RouterView />
  <div class="under">
    本站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank"
      ><img src="@/assets/ypy.png" alt="" /></a
    >提供cdn加速 / 云存储支持
  </div>
</template>

<style scoped lang="less">
.under {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
}
</style>

