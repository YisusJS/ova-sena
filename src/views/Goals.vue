<template>
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>
  <div class="container-goals">
    <div class="goals">
      
      <section class="tittle_Goals">
        <h1><strong>Competencia</strong></h1>

        <h4>Fundamentar la preparación Técnico - Táctica del deportista según la disciplina y/o modalidad en el nivel de formación deportiva.</h4>
      </section>

      <div class="container">
        <nav class="container-img">
          <img id="img" src="../assets/goals/goal-one.svg" />
        </nav>
        <div class="texto">
          <p class="texto__goals">
            1.1 Realizar la verificación y control de la ejecución de las
            actividades del plan de preparación técnico-táctico según protocolos
            establecidos
          </p>
        </div>
      </div>

      <div class="container">
        <nav class="container-img">
          <img id="img" src="../assets/goals/goal-two.svg" />
        </nav>
        <div class="texto">
          <p class="texto__goals">
            1.2 Ejecutar las actividades propuestas en el plan de preparación
            técnico- táctica según modalidad y nivel de formación deportiva.
          </p>
        </div>
      </div>

      <div class="container">
        <nav class="container-img">
          <img id="img" src="../assets/goals/goal-three.svg" />
        </nav>
        <div class="texto">
          <p class="texto__goals">
            1.3 Alistar la logística necesaria para desarrollar plan de
            preparación técnico-táctica según protocolos establecidos.
          </p>
        </div>
      </div>

      <div class="container">
        <nav class="container-img">
          <img id="img" src="../assets/goals/goal-four.svg" />
        </nav>
        <div class="texto">
          <p class="texto__goals">
            1.4 Identificar la estructura de un plan de preparación técnico-
            táctica según normatividad establecida.
          </p>
        </div>
      </div>

      <div class="container">
        <nav class="container-img">
          <img id="img" src="../assets/goals/goal-five.svg" />
        </nav>
        <div class="texto">
          <p class="texto__goals">
            1.5 Presentar informes y hacer recomendaciones sobre el desarrollo
            de las actividades del plan de actividad física según lineamientos y
            políticas de la empresa.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Goals",
  title: "Resultados de Aprendizaje - SENA",
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.text {
  color: $primary-color;
}
.container-goals {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
  width: 80vw;
  min-height: 100vh;
}
//container principal
.goals {
  background-color: #cbdbf7;
  padding: 1px 0;
  margin: 40px auto;
  max-width: 1265px;
  width: 100%;
  height: max-content;
  border-radius: 40px;
}

.tittle_Goals{
  text-align: center;
}

.tittle_Goals h1{
  background-color: white;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 10px;
}

// container secundarios-objetivos
.container {
  margin: 55px auto;
  height: 80px;
  max-width: 1000px;
  background-color: #eff4fd;
  border-radius: 13px;
  display: flex;
}
//IMAGES
.container-img {
  background-color: #91b5f3;
  height: 80px;
  width: 100px;
  margin-right: 30px;
  text-align: center;
  border-top-left-radius: 12px;
  border-end-start-radius: 12px;
}
#img {
  width: 60px;
  height: auto;
  margin: 10px;
}
//Texto
.texto {
  margin-left: 5px;
  margin-right: 5px;
  max-width: 100%;
  text-align: center;
}
.texto__goals {
  margin: 10px;
  position: absolute;
  max-width: 840px;
  color: #393939;
}

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
</style>
