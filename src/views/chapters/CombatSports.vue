<template>
  <menuComponent :index="4"></menuComponent>
  <main class="container-combarSports">
    <section class="module">
      <div class="module__title-container" id="5.1">
        <h2 class="module__title">Historia</h2>
      </div>
      <div class="module__content">
        <p>
          Lauterborn, D. (2001). El origen de las artes marciales se atribuye a
          la cultura oriental caracterizado por ser un pueblo con tradiciones
          ancestrales, el "arte marcial" fue la especialidad de los guerreros en
          Asia y reflejaba también un poder o una característica del Hombre.
          Cuando se habla de arte marcial se evoca cultura y conocimiento del
          cuerpo. El Taoismo es un sistema filosófico y religión que tuvo su
          origen en China en las ideas del filósofo Laozi (siglo VI a. C.); se
          caracteriza por creer que existe una solidaridad absoluta entre el
          hombre y la naturaleza, puesto que ambos concuerdan perfectamente y
          tienen un sustrato común. El nacimiento del deporte de combate resulta
          de la transformación del "arte marcial" y de su adaptación a la
          cultura contemporánea. La " dualidad ", el " resultado ", la "
          competición ", el " campeón”. Son palabras típicamente producto del
          individuo y no de propio de su Origen.
        </p>
        <div>
          <img
            :src="require('@/assets/modules/combatsports/submodule1.1.png')"
            alt=""
          />
          <img
            :src="require('@/assets/modules/combatsports/submodule1.2.png')"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="5.2">
        <h2 class="module__title">Deportes de combate</h2>
      </div>
      <div class="module__content">
        <p>
          <b>Clasificacion de los deportes de combate</b>
          <br />
          <br />
          Según la clasificación de Visotzky (cómo se citó en González, 2013)
          los deportes de combate se pueden clasificar en: golpeadores,
          agarradores y combinados. Los golpeadores son aquellos que utilizan
          los golpes para lograr la victoria los cuales son realizados con
          brazos, otros con piernas y brazos y el tiempo de duración de los
          rounds son de 1 a 3 minutos con un minuto de descanso. Cómo el boxeo,
          el taekwondo y el karate entre otros. Son características de los
          deportes de combate el poseer habilidades abiertas con un alto grado
          de incertidumbre, debido a que el luchador no sabe cómo actuará el
          oponente; fisiológicamente se puede decir que los esfuerzos realizados
          durante un combate se pueden enmarcar en anaeróbicos a lácticos,
          lácticos y de resistencia por la duración del combate. Para Copello
          (2013) los deportes de combate se pueden caracterizar por un volumen
          elevado de elementos técnicos y esto implica un análisis de la
          metodología a utilizar, para lo cual es necesario tener en cuenta las
          condiciones en las cuales se realiza el entrenamiento y las
          orientaciones requeridas.
        </p>
        <div>
          <img
            :src="require('@/assets/modules/combatsports/submodule1.1.png')"
            alt=""
          />
          <img
            :src="require('@/assets/modules/combatsports/submodule1.2.png')"
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
.container-combarSports {
  background-color: $primary-color;
  border-radius: 25px;
  margin: 0 100px 0 22vw;
  width: 74vw;
  min-height: 100vh;
  padding: 100px 0;
}
.module {
  background-color: #fff;
  max-width: 90%;
  padding: 5px 30px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
  border-radius: 10px;
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
    text-align: justify;
    width: 100%;
    z-index: 110;
    display: flex;
    color: #6e798c;
    border-radius: 1000px;
  }
}
</style>
