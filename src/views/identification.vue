<template>
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>

  <main class="container-identification">
    <section class="module">
      <div class="module__title-container">
        <h2 class="module__title">Identificación</h2>
      </div>
      <div class="module__content">
        <p>
          <br />
          El programa para la formación de Técnicos en Ejecución de Programas
          Deportivos SENA posee la competencia: Fundamentar la preparación
          técnico - táctica del deportista según la disciplina y/o modalidad en
          el nivel de formación deportiva, para lo cual es necesario
          inicialmente que los aprendices identifiquen, conozcan y apliquen los
          conceptos del desarrollo motor teniendo en cuenta las etapas de
          evolución de los seres humanos desde el punto de vista fisiológico,
          morfológico, físico y psicológico entre otros. <br /><br />El aprendiz
          SENA deberá adquirir la competencia que le permita diseñar programas
          para el desarrollo de las capacidades motoras coordinativas y
          condicionales de los niños en la etapa escolar empleando como
          estrategia la práctica de la educación física, para lo cual el
          conocimiento de la metodología para la enseñanza de la gimnasia básica
          y las pruebas del atletismo utilizando técnicas lúdicas deberán
          incidir tanto en el desarrollo físico como mental. <br /><br />
          El conocimiento y la aplicación de disciplinas deportivas básicas como
          la gimnasia y el atletismo en la etapa escolar debe convertirse para
          el aprendiz SENA en una herramienta muy fuerte que le servirá como
          punto de partida para la enseñanza de otras disciplinas deportivas
          como los fundamentos básicos de algunos deportes de combate y
          conjunto. <br /><br />El proceso enseñanza aprendizaje no debe estar
          desconectado de la pedagogía por lo cual el conocimiento y la
          aplicación de la metodología de la enseñanza desde los modelos
          pedagógicos, las técnicas de enseñanza y el estudio de las
          inteligencias múltiples deberán contribuir con la práctica adecuada
          para el desarrollo de las capacidades motoras y la fundamentación
          básica deportiva. <br /><br />La formación de aprendices con
          competencias para el desarrollo motor iniciando con la educación
          física por medio de la gimnasia básica y las pruebas del atletismo
          deberán contribuir con el logro del objetivo del proyecto de formación
          del programa: Capacitar personal para el desarrollo de programas de
          educación física y la iniciación deportiva utilizando métodos activos
          que puedan contribuir con el desarrollo saludable físico y mental de
          los niños de la provincia Guanentina y Comunera.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
//import {ref} from 'vue'
export default {
  name: "Identification",
  title: "Identificación - SENA",
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

//boton salir
.home-link {
  background-color: $quinary-color;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 40px;
  height: 150px;
  border-radius: 0 20px 20px 0;
  z-index: 100;
}

.home-link__container {
  background-color: $quinary-color;
  width: 60px;
  height: 60px;
  border-radius: 0 20px 20px 0;
  right: -70%;
  top: 0;
  bottom: 0;
  margin: auto 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.audio {
  width: 80%;
  height: 50px;
  z-index: 200;
}

.home-link__button {
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0;
  box-shadow: 0 0 15px 0 rgba($color: #000000, $alpha: 0.25);
}

.home-link__icon {
  margin: 7px 7.5px;
  width: 25px;
  height: 25px;
}

///////////////////////////
.text {
  color: $primary-color;
}
.container-identification {
  width: 80vw;
  margin: 0 auto;
  height: 100vh;
  background-color: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.module {
  width: 80%;
  height: auto;
  background-color: #fff;
  margin-top: 20px;
  padding: 5px 30px;
  border-radius: 10px;
  &__title-container {
    z-index: 100;
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
    margin-top: -40px;
  }
}

@media (max-width: 1400px) {
  .container-identification {
    height: auto;
  }

  .module__content {
    height: auto;
  }
}
</style>
