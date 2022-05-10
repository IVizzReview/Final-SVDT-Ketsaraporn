import Vue from "vue";
import VueRouter from "vue-router";
import AddmissionPdbPage from "../views/AddmissionPdbPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/AddmissionPdbPage",
    name: "AddmissionPdbPage",
    component: AddmissionPdbPage
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
