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
