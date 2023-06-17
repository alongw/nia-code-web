<script lang="ts" setup>
import axios from '@/utils/request'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const encodeipt = ref('')
const btnLoading = ref(false)
const recall = ref('')
const decodebtn = async () => {
  if (encodeipt.value == '') {
    return ElMessage({
      message: '大坏蛋！你用空数据在这解密啥呢？？哼！！',
      type: 'warning'
    })
  }
  // 发送请求解密数据
  btnLoading.value = true
  const { data: res } = await axios.post('decode', {
    text: encodeipt.value
  })
  if (res.status != 200) {
    btnLoading.value = false
    return ElMessage.error(res.msg)
  }
  recall.value = res.text
  btnLoading.value = false
}

// 复制密文到剪切板
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(encodeipt.value)
    ElMessage({
      message: '密文已复制到剪切板~',
      type: 'success'
    })
  } catch (error) {
    ElMessage.error('发生了内部错误，请稍后再试')
  }
}
</script>
<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>解密文本</span>
        <el-button class="button" type="success" @click="decodebtn" :loading="btnLoading"
          >解密</el-button
        >
      </div>
    </template>
    <el-text class="mx-1" size="small"
      >使用 Nia-Code 可以很轻松的将又臭又长的密文转换为普通的明文</el-text
    >
    <el-input v-model="encodeipt" :rows="5" type="textarea" placeholder="Please input..." />
    <div class="pass" v-if="recall != ''">
      <el-button type="primary" @click="handleCopy" style="margin: 10px 10px">复制密文</el-button>
      <el-input v-model="recall" :rows="5" type="textarea" placeholder="Please input..." />
    </div>
  </el-card>
</template>

<style lang="less">
.box-card {
  margin: 30px auto;
  width: 100%;
  max-width: 600px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
}
</style>
