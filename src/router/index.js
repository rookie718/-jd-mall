import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 3. 路由的懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建router

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/Profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

// 3.导出router
export default router