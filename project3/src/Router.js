import { createRouter, createWebHashHistory } from "vue-router";

import HomeScreen from "@/pages/HomeScreen";
import Transactions from '@/pages/Transactions'
import TransactionDetail from '@/pages/TransactionDetail'

const routes = [
  { path: "/", component: HomeScreen },
  { path: "/transactions", component: Transactions },
  { path: "/transactions/:id", component: TransactionDetail },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
