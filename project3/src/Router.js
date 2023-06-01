import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "@/pages/HomeScreen";
import Transactions from '@/pages/Transactions'
import TransactionDetail from '@/pages/TransactionDetail'

const routes = [
  { path: "/", name: "home-route", component: HomeScreen },
  { path: "/transactions", name: "transactions-route", component: Transactions },
  { path: "/transaction/:id", name: "transaction-detail-route", component: TransactionDetail },
  { path: "/ts", redirect: "/transactions" },
  { path: "/:pathMatch(.*)*", component: HomeScreen },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
