import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Portfolio from "@/components/Portfolio.vue";
import Stocks from "@/components/Stocks.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio
  },
  {
    path: "/stocks",
    name: "stock",
    component: Stocks
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
