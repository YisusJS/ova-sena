<template>
<div>
  <router-link to="/">Inicio</router-link>
  <router-link to="/introduction">Introducción</router-link>
  <router-link to="/goals">Objetivos</router-link>
  <router-link to="/contents">Contenidos</router-link>
  <router-link to="/bibliographies">Bibliografias</router-link>
  <router-link to="/athleticism">Atletismo</router-link>
  <router-link to="/combatsports">Deportes de combate</router-link>
  <router-link to="/gymnnastics">Gimnasia</router-link>
  <router-link to="/motorskills">Habilidades motoras</router-link>
  <router-link to="/setsports">Deportes de conjunto</router-link>
  <router-link to="/sport">El deporte</router-link>
</div>
  <router-view />
</template>
<script>
// Para usar el store en sus componentes, vistas primero importamos el vuex
export default {
  // components: { Menu },
  setup() {
    // Y luego le asignamos a una variable el store
    // const store = useStore()
  },
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";
html {
  font-family: 'Poppins', sans-serif;
}
</style>