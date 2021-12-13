<template>
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>

  <main class="container-problematic">
    <section class="module">
      <div class="module__title-container">
        <h2 class="module__title">Problemática</h2>
      </div>
      <div class="module__content">
        <p>
          <br />
          La competencia que debe permitir al aprendiz SENA adquirir
          conocimientos y habilidades para la enseñanza de las técnicas
          deportivas es: Fundamentar la preparación técnico - táctica del
          deportista según la disciplina y/o modalidad en el nivel de formación
          deportiva, pero es necesario delimitar los contenidos teniendo en
          cuenta que los deportes son numerosos y según las guías de aprendizaje
          se hace mayor énfasis en algunos deportes de conjunto como el fútbol,
          baloncesto y voleibol. <br /><br />La falta de delimitación de los
          contenidos para la enseñanza de la técnica deportiva conlleva a que
          los aprendices adquieran generalidades deportivas para el deporte base
          sin conocer con certeza cuales son los deportes básicos que debe
          desarrollar un Técnico en Ejecución de Programas Deportivos. La falta
          de delimitación de los fundamentos deportivos para la enseñanza del
          aprendiz lleva a la pregunta problema ¿cómo delimitar los fundamentos
          deportivos que debe adquirir el aprendiz SENA?
        </p>
      </div>
    </section>
  </main>
</template>

<script>
//import {ref} from 'vue'
export default {
  name: "Problematic",
  title: "Problemática - SENA",
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
.container-problematic {
  width: 80vw;
  margin: 0 auto;
  height: 100vh;
  background-color: #cbdbf7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.module {
  width: 80%;
  height: auto;
  background-color: #eff4fd;
  padding: 5px 30px;
  border-radius: 10px;
  &__title-container {
    z-index: 100;
    width: max-content;
    height: auto;
    background: #eff4fd;
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
</style>
