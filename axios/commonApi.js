import Vue from 'vue'
import store from '../store'
import axios from 'axios'
import config from '../config'

Vue.prototype.$axios = axios
axios.interceptors.request.use(config => {
  store.commit('app_openLoading')
  let userTocken = localStorage.getItem('access_token') || ''
  config.headers.access_token = userTocken
  config.headers.cache = false
  if (config.method === 'post' && config.data) {
    // config.data = {
    //   ...config.data,
    //   passportId: localStorage.getItem('userDbId'),
    //   passId: localStorage.getItem('userDbId')
    // }
    // JSON.stringify(config.data)
  }
  if (config.method === 'get' && config.params) {
    // config.params.passportId = localStorage['userDbId']
    // config.params.passId = localStorage['userDbId']
  }
  return config
}, function (error) {
  // 处理响应失败
  return Promise.reject(error)
})
axios.interceptors.response.use(data => {
  if (data.status === 200) {
    store.commit('app_closeLoading')
  }
  if (data.status === 500) {
    store.commit('app_closeLoading')
  }
  if (data.status === 404) {
    store.commit('app_closeLoading')
  }
  // console.log(data)
  // return Promise.resolve(data)
  return data
}, error => {
  console.log(error)
  // alert('接口请求失败')
  // this.$Message.info('This is a info tip')
  return Promise.reject(error)
})
export default {
  params: { // 每一个连接都跟着的东西，查询字符串
    clientCode: 'wechat',
    channelCode: 'arton'
  },
  axios: axios,
  HOST: config.URL,
  HOST2: config.URL2
}
