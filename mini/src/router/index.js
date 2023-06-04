import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "product",
    component: () => import("../views/ProductApp.vue"),
  },
  {
    path: "/brand",
    name: "brand",
    component: () => import("../views/BrandApp.vue"),
  },
  {
    path: "/formProduct",
    name: "formProduct",
    component: () => import("../views/FormProduct.vue"),
  },
  {
    path: "/formProduct/:id",
    name: "formProductEdit",
    component: () => import("../views/FormProduct.vue"),
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/CategoryApp.vue"),
  },
  {
    path: "/status",
    name: "status",
    component: () => import("../views/StatusApp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
