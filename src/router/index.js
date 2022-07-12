import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import("../views/index.vue")
const Xiangqin = () => import('../views/xiangqing.vue')
const Product = () => import('../views/meiri.vue')
const Search = () => import('../views/shousuo.vue')
const Classify = () => import('../views/fenlei.vue')
const Storeto = () => import('../views/jindiankankan.vue')
const Login = () => import('../views/denglu.vue')
const Shopping = () => import('../views/gouwuche.vue')

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
  },
  {
    path: "/classify",
    component: Classify
  },
  {
    path: "/storeto",
    component: Storeto
  }, {
    path: "/login",
    component: Login
  }, {
    path: "/shopping",
    component: Shopping,
    meta: {
      needLogin: true
    }

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
