import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/ui/pages/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    // prefix of this name is used to select layout for the page
    // here `main` will use the ui/layout/main.vue
    // you can change this setting in App.vue
    name: "main.home",
    component: Home,
  },
  {
    path: "/server",
    name: "main.server",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/ui/pages/server.vue"),
  },
  {
    path: "*",
    name: "error.fallback",
    component: () => import(/* webpackChunkName: "fallback" */ "@/ui/pages/fallback.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
