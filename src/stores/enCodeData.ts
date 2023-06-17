import { ref } from 'vue'
import { defineStore } from 'pinia'
import type encodeType from '@/types/encoderes'

export const useEncodeStore = defineStore('encode', () => {
  const encode = ref('')
  const wrightEncode = (data: string) => {
    encode.value = data
  }
  const encodeback = ref({
    status: 0,
    msg: '',
    text: '',
    safe: '',
    lite: ''
  })
  const wrightData = (data: encodeType) => {
    encodeback.value = data as any
  }
  return { encodeback, wrightData, wrightEncode, encode }
})
