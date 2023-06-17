<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useEncodeStore } from '@/stores/enCodeData'
import { ElMessage } from 'element-plus'

const route = useRoute()
const encodeStore = useEncodeStore()
const textareaValue = ref('')

watch(
  () => encodeStore.encodeback,
  (newValue) => {
    if (route.path === '/home/safe') {
      textareaValue.value = newValue.safe
    }
    if (route.path === '/home/default') {
      textareaValue.value = newValue.text
    }
    if (route.path === '/home/lite') {
      textareaValue.value = newValue.lite
    }
  },
  {
    immediate: true,
    deep: true
  }
)

watch(
  () => route.path,
  () => {
    if (route.path === '/home/safe') {
      textareaValue.value = encodeStore.encodeback.safe
    }
    if (route.path === '/home/default') {
      textareaValue.value = encodeStore.encodeback.text
    }
    if (route.path === '/home/lite') {
      textareaValue.value = encodeStore.encodeback.lite
    }
  },
  {
    immediate: true,
    deep: true
  }
)

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(textareaValue.value)
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
  <div>
    <el-input v-model="textareaValue" :rows="7" type="textarea" placeholder="" />
    <el-button type="primary" @click="handleCopy" style="margin: 10px 10px">复制</el-button>
  </div>
</template>
