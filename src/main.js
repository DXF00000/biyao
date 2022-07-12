import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
router.beforeEach((to, from, next) => {

    // // 读取一个数据
    var a = sessionStorage.token;

    // 需要登录的页面，判断路由的元信息
    if (to.meta.needLogin) {
        if (a) {
            next()
        } else {
            alert("请先登录")
            next({
                path: "/login",
                query: {
                    "to": to.path
                }
            })
        }
    } else {
        next();
    }
});
createApp(App).use(store).use(router).mount('#app')
