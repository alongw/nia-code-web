<script lang="ts" setup>
import axios from '@/utils/request'
import { ref, watch } from 'vue'
import { useEncodeStore } from '@/stores/enCodeData'
import { ElMessage } from 'element-plus'
import ListCode from '@/pages/Encode/ListCode.vue'
import type encodeType from '@/types/encoderes'

const encodeStore = useEncodeStore()

const encodeipt = ref('')
const btnLoading = ref(false)
watch(encodeipt, () => {
  encodeStore.wrightEncode(encodeipt.value)
})

const encodebtn = async () => {
  if (encodeipt.value == '') {
    return ElMessage({
      message: '不可以加密空数据哦~你真坏！',
      type: 'warning'
    })
  }
  // 发送加密请求
  btnLoading.value = true
  const { data: res } = await axios.post<encodeType>('/encode', {
    text: encodeipt.value
  })
  if (res.status != 200) {
    return ElMessage.error(res.msg)
  }
  encodeStore.wrightData(res)
  btnLoading.value = false
  ElMessage({
    message: '加密数据成功！',
    type: 'success'
  })
}
</script>
<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>加密文本</span>
        <el-button class="button" type="success" @click="encodebtn" :loading="btnLoading"
          >加密</el-button
        >
      </div>
    </template>
    <el-text class="mx-1" size="small"
      >使用 Nia-Code 可以很轻松的将普通的明文转换为又臭又长的密文</el-text
    >
    <el-input v-model="encodeipt" :rows="5" type="textarea" placeholder="Please input..." />
    <ListCode v-if="encodeStore.encodeback.lite != ''" />
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
