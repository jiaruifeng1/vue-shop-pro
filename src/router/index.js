import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import User from '@/components/User'

Vue.use(Router)

var router = new Router({
  routes: [
    {path: '/login', component: Login},
    {path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {path: '/welcome', component: Welcome},
        {path: '/users', component: User}
      ]
    }
  ]
})

// 给路由设置 导航守卫 对token监听
router.beforeEach((to, from, next) => {
  // 请求login直接通过
  if (to.path === '/login') {
    return next()
  }
  // 非login判断token
  var token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
