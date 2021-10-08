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
    path: "/introduccion",
    name: "Introduction",
    component: () => import("@/views/Introduction.vue"),
  },
  {
    path: "/metas",
    name: "Goals",
    component: () => import("@/views/Goals.vue"),
  },
  {
    path: "/contenidos",
    name: "Contents",
    component: () => import("@/views/Contents.vue"),
  },
  {
    path: "/bibliografias",
    name: "Bibliographies",
    component: () => import("@/views/Bibliographies.vue"),
  },
  // Capítulos del OVA
  {
    path: "/contenidos/atletismo",
    name: "Athleticism",
    component: () => import("@/views/chapters/Athleticism.vue"),
  },
  {
    path: "/contenidos/deportes_de_combate",
    name: "CombatSports",
    component: () => import("@/views/chapters/CombatSports.vue"),
  },
  {
    path: "/contenidos/gimnasia",
    name: "Gymnastics",
    component: () => import("@/views/chapters/Gymnastics.vue"),
  },
  {
    path: "/contenidos/habilidades_motoras",
    name: "MotorSkills",
    component: () => import("@/views/chapters/MotorSkills.vue"),
  },
  {
    path: "/contenidos/deportes_de_conjunto",
    name: "SetSports",
    component: () => import("@/views/chapters/SetSports.vue"),
  },
  {
    path: "/contenidos/deporte",
    name: "Sport",
    component: () => import("@/views/chapters/Sport.vue"),
  },
  {
    path: "/contenidos/habilidades_motoras/test",
    name: "Test",
    component: () => import("@/views/evaluation/evaluation1.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
