import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodView from "../views/FoodView.vue";
import FoodDetail from "../views/FoodDetail.vue";
import KeranjangView from "../views/KeranjangView.vue";
import CheckoutSuccess from "../views/CheckoutSuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "foods",
    component: FoodView,
  },
  {
    path: "/food/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/keranjang",
    name: "keranjang",
    component: KeranjangView,
  },
  {
    path: "/checkout",
    name: "CheckoutSuccess",
    component: CheckoutSuccess,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
