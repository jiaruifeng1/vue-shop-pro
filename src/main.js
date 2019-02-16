import Vue from 'vue'
import App from './App'
import router from './router'
// 引入global.css全局样式控制文件
import './assets/css/global.css'
// 引入字体图标
import './assets/fonts/iconfont.css'
// 引入element-ui
import ElementUI from 'element-ui'
// 引入axios并做配置
import axios from 'axios'
// axios 请求根目录
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios 的请求拦截器
axios.interceptors.request.use(
  function(config) {
    // config:代表axios的子级配置对象
    var token = window.sessionStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
// 给axios配置Vue的$http成员
Vue.prototype.$http = axios

// 把elementui 注册给vue
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
