import axios from 'axios'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'

const request = axios.create({
  // API 请求的默认前缀
  timeout: 6000 // 请求超时时间
})

const errorHandler = error => {
  const res = error.response
  if (res) {
    const data = res.data
    if (!data.status) {
      notification.error({
        message: 'error',
        description: data.msg
      })
    }
  }
  return Promise.reject(error)
}

request.interceptors.response.use(
  response => response.data,
    errorHandler
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
