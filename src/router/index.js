import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import("../views/index.vue")
const Xiangqin = () => import('../views/xiangqing.vue')
const Product = () => import('../views/xingpin.vue')
const Search = () => import('../views/shousuo.vue')

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Index
  }, {
    path: "/page",
    component: Xiangqin
  }, {
    path: "/product",
    component: Product
  }, {
    path: "/search",
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
