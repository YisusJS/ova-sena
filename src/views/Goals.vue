<template>
  <div class="container-goals">
    <div class="goals">
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
  title: "Objetivos - SENA",
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
  min-height: 100vh;
}
//container principal
.goals {
  background-color: $background-color;
  padding: 1px 0;
  margin: 40px auto;
  max-width: 1265px;
  width: 100%;
  height: max-content;
  border-radius: 40px;
}
// container secundarios-objetivos
.container {
  margin: 55px auto;
  height: 80px;
  max-width: 1000px;
  background-color: $secondary-color;
  border-radius: 13px;
  display: flex;
}
//IMAGES
.container-img {
  background-color: #eec1f5;
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
}
</style>
