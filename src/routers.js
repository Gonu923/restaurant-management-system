import HomePart from "./components/HomePart";
import SignUp from "./components/SignUp";
import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn';
import AddRestaurant from './components/AddRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant';
const routes = [
  {
    name: HomePart,
    component: HomePart,
    path: "/"
  },
  {
    name: SignUp,
    component: SignUp,
    path: "/sign-up"
  },
  {
    name: LogIn,
    component: LogIn,
    path: "/login"
  },
  {
    name: AddRestaurant,
    component: AddRestaurant,
    path: "/add-restaurant"
  },
  {
    name: UpdateRestaurant,
    component: UpdateRestaurant,
    path: "/update-restaurant/:id"
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
