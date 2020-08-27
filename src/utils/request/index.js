import axios from 'axios'
import { VueAxios } from './axios'

const request = axios.create({
  // API 请求的默认前缀
  timeout: 6000 // 请求超时时间
})

request.interceptors.response.use(
  response => response.data
,error => Promise.reject(error)
)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}
