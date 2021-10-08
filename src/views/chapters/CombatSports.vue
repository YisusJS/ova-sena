<template>
  <menuComponent :index="5"></menuComponent>
  <main class="container-motorSkills">
    <section class="module">
      <div class="module__title-container" id="1.1">
        <h2 class="module__title">Historia</h2>
      </div>
      <div class="module__content">
        <p>
          El término Motricidad surge del estudio desde el punto de vista
          científico de la Educación Física. En el siglo XVII fue a través de
          una propuesta de John Locke, de la que surgió la denominada Educación
          Física, con el propósito de dominar y adiestrar el cuerpo. Locke
          expresaba el valor de la Educación Física en su trabajo titulado Some
          Thoughts Concerning Education. Para Locke, la Educación Física era un
          medio de preparar a las personas ante posibles emergencias de salud,
          que involucraban dificultades y fatiga. Además, este filósofo-educador
          vislumbraba a la Educación Física como forma de lograr el desarrollo
          de un cuerpo vigoroso y listo para cualquier acción que lo necesite.
          Al respecto, Manuel Sergio (2007) señala que "la Motricidad es el
          cuerpo en movimiento intencional, procurando la trascendencia, la
          superación, a nivel integralmente humano y no del físico tan sólo". Es
          decir, es la propia manifestación de la vida en sus distintos modos de
          expresarse e impresionarse en ese diálogo yo-otro-cosmos. (Couto y
          Trigo 2014).
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
  name: "CombatSports",
  title: "Deportes de Combate - SENA",
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
