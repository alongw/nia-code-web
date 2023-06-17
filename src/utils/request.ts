import axios from 'axios'
const newAxios = axios.create({
  baseURL: import.meta.env.VITE_HTTP_BASE_URL
})

export default newAxios
