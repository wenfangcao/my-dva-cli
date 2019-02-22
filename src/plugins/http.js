import axios from 'axios'

// axios 配置
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://www.baidu.com'
axios.defaults.withCredentials = true
// 对响应数据进行处理
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 设置请求头信息
axios.interceptors.request.use(
  config => {
    // let xstreamId = sessionStorage.getItem('token')
    // config.headers['x-stream-id'] = xstreamId
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios
