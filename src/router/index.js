import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  // Todas las rutas que lleva el home
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/introduction",
    name: "Introduction",
    component: () =>
      import("../views/Introduction.vue"),
  },
  {
    path: "/goals",
    name: "Goals",
    component: () =>
      import("../views/Goals.vue"),
  },
  {
    path: "/contents",
    name: "Contents",
    component: () =>
      import("../views/Contents.vue"),
  },
  {
    path: "/bibliographies",
    name: "Bibliographies",
    component: () =>
      import("../views/Bibliographies.vue"),
  },
  // Capítulos del OVA
  {
    path: "/athleticism",
    name: "Athleticism",
    component: () =>
      import("../views/chapters/Athleticism.vue"),
  },
  {
    path: "/combatsports",
    name: "CombatSports",
    component: () =>
      import("../views/chapters/CombatSports.vue"),
  },
  {
    path: "/gymnnastics",
    name: "Gymnastics",
    component: () =>
      import("../views/chapters/Gymnastics.vue"),
  }, 
  {
    path: "/motorskills",
    name: "MotorSkills",
    component: () =>
      import("../views/chapters/MotorSkills.vue"),
  }, 
  {
    path: "/setsports",
    name: "SetSports",
    component: () =>
      import("../views/chapters/SetSports.vue"),
  }, 
  {
    path: "/sport",
    name: "Sport",
    component: () =>
      import("../views/chapters/Sport.vue"),
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
