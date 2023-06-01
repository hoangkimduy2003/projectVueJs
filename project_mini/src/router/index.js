import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/listProducts',
    name: 'listProducts',
    component: () => import('../views/product/ListProduct.vue')
  },
  {
    path: '/formProduct',
    name: 'formProduct',
    component: () => import('../views/product/FormProduct.vue')
  },
  {
    path: '/formUser',
    name: 'formUser',
    component: () => import('../views/users/FormUser.vue')
  },
  {
    path: '/listUser',
    name: 'listUser',
    component: () => import('../views/users/ListUser.vue')
  },
  {
    path: '/productDetail/:id',
    name: 'productDetail',
    component: () => import('../views/product/FormProduct.vue')
  }
]

//productDetail

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
