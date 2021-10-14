<template>
  <menuComponent :index="5"></menuComponent>
  <main class="container-motorSkills">
    <section class="module">
      <div class="module__title-container" id="1.1">
        <h2 class="module__title">Futuro contenido aqui</h2>
      </div>
      <div class="module__content">
        <p>
          lorem
          gdhsjndsalkdnskndsndaslkndalksndaslkndaslkndaslkndaslkndalkndaslkndaslkdndaslkndaslknd
          lorem lorem lorem lorem lorem lorem
        </p>
        <div>
          <img
            :src="require('@/assets/modules/motorSkills/submodule1.1.png')"
            alt=""
          />
          <img
            :src="require('@/assets/modules/motorSkills/submodule1.2.png')"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import menuComponent from "@/components/menu.vue";
export default {
  name: "SetSports",
  title: "Deportes de Conjunto - SENA",
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
.container-motorSkills {
  background-color: $primary-color;
  border-radius: 25px;
  margin: 0 100px 0 400px;
  min-height: 100vh;
  padding: 100px 0;
}
.module {
  background-color: #fff;
  max-width: 800px;
  padding: 5px 30px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
  &__title-container {
    z-index: 100;
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    width: max-content;
    height: auto;
    background: white;
    padding: 0 10px;
    margin: 0 auto;
    border-radius: 10px;
  }
  &__title {
    margin: 0;
    width: 100%;
    font-size: 3rem;
    font-weight: 500;
    color: #393939;
    text-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
  }
  &__content {
    position: relative;
    z-index: 110;
    display: flex;
    color: #6e798c;
  }
}
</style>
