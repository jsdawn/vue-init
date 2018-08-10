import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 异步加载组件
const test = r => require.ensure([], () => r(require("@/pages/test")), "test"); //登录
const home = r => require.ensure([], () => r(require("@/pages/home")), "home"); //主页

//路由列表
const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/test",
    name: "test",
    component: test
  }
];

//最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
const router = new Router({
  routes
});

//全局 loading 列表name值,需要loading的页面插入列表
let loadList = ["home"];
//路由守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
