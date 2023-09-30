import axios from 'axios'
import { useAuthStore } from './store'

const instance = axios.create({
  baseURL: 'https://pear-busy-penguin.cyclic.cloud'
  // baseURL: 'http://localhost:8080' 
})

instance.interceptors.request.use(config => {
  const token = useAuthStore.getState().token
  config.headers = { Authorization: `Bearer ${token}` }
  return config
})

export default instance
