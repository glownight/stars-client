import home from "@/views/home/index.vue";
import mine from "@/views/mine/index.vue";

import {
  createRouter,
  createMemoryHistory,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: {
      title: "首页",
      keepAlive: false,
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: mine,
    meta: {
      title: "我的",
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
