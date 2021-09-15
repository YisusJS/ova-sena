<template>
  <aside class="menu">
    <div>
      <figure><img :src="back" alt="Imágen Volver" /></figure>
      <figure><img :src="sena" alt="Imágen Sena" /></figure>
      <figure><img :src="home" alt="Imágen Home" /></figure>
    </div>
    <nav>
      <ol>
        <li></li>
      </ol>
    </nav>
  </aside>
</template>
<script>
import home from "@/assets/utilities/home.svg";
import back from "@/assets/utilities/back.svg";
import sena from "@/assets/utilities/sena.svg";

export default {
  name: "Menu",
  setup() {
    return {
      home,
      back,
      sena,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.text {
  color: $primary-color;
}

.menu {
  max-width: 300px;
  background-color: red;
}
</style>
