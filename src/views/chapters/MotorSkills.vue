<template>
  <aside class=""></aside>
  <main class=""></main>
  <menuComponent></menuComponent>
</template>
<script>
import menuComponent from "@/components/menu.vue";

export default {
  name: "MotorSkills",
  title: "La Motricidad - SENA",
  components: {
    menuComponent,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.text {
  color: $primary-color;
}
</style>
