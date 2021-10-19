<template>
  <!-- Buttom -->
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>
  <div class="evaluation1">
    <h1 class="evaluation1_h1">Capítulo 3. La gimnasia</h1>
    <!-- Preguntas -->
    <div class="evaluation1_part">
      <div class="evaluation1_statement" v-if="part <= 1">
        <p class="evaluation1_statement_text">
          <strong>Pregunta #{{ part + 1 }}: {{ statement[part] }}</strong>
        </p>
      </div>
      <div class="evaluation1_answers">
        <div class="evaluation1_answers_up" v-if="part <= 1">
          <button class="answers__A" @click="position(answersA[part].value)">
            A: {{ answersA[part].text }}
          </button>
          <button class="answers__B" @click="position(answersB[part].value)">
            B: {{ answersB[part].text }}
          </button>
        </div>
        <div class="evaluation1_answers_buttom" v-if="part <= 1">
          <button class="answers__C" @click="position(answersC[part].value)">
            C: {{ answersC[part].text }}
          </button>
          <button class="answers__D" @click="position(answersC[part].value)">
            D: {{ answersD[part].text }}
          </button>
        </div>
        <div class="evaluation1_answers_final" v-else>
          <center>
            <h1 style="text-center"><Strong>Resultados</Strong></h1>
          </center>
          <h2>Respuestas correctas: {{ correct }}</h2>
          <h2>Respuestas Incorrectas: {{ incorrect }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//Importacion de herramientas
import { ref } from "vue";
import Swal from "sweetalert2";

export default {
  name: "Evaluation1",
  title: "Evaluacion modulo 1 - SENA",
  setup() {
    //variables
    let part = ref(0);
    let correct = ref(0);
    let incorrect = ref(0);

    //Enunciados
    const statement = ref([
      "¿El atletismo es una actividad física que se puede practicar en?",
      "¿En qué año la pista de los juegos olímpicos de atletismo era de 333,33m?",
    ]);

    //Respuesta A
    const answersA = ref([
      { text: "Al aire libre", value: false },
      { text: "1896", value: true },
    ]);

    //Respuesta B
    const answersB = ref([
      { text: "Pistas cubiertas", value: false },
      { text: "1890", value: false },
    ]);

    //Respuesta C
    const answersC = ref([
      { text: "Todas las anteriores", value: true },
      { text: "1900", value: false },
    ]);

    //Respuesta D
    const answersD = ref([
      { text: "Ninguna de las anteriores", value: false },
      { text: "1898", value: false },
    ]);

    //Funciones
    function position(datos) {
      //Validar preguntas
      if (datos) {
        Swal.fire(
          "Respuesta correcta",
          "preciona ok para continuar",
          "success"
        );
        part.value = part.value + 1;
        correct.value = correct.value + 1;
      } else {
        Swal.fire(
          "Respuesta incorrecta",
          "preciona ok para continuar",
          "warning"
        );
        part.value = part.value + 1;
        incorrect.value = incorrect.value + 1;
      }
    }

    //Retorno
    return {
      statement,
      answersA,
      answersB,
      answersC,
      answersD,
      part,
      position,
      correct,
      incorrect,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.evaluation1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1366px;
  max-width: 1366px;
  height: 100vh;
  background-color: $background-color;
}

.evaluation1_h1 {
  color: $font-color;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
}

.evaluation1_part {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.evaluation1_statement {
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  box-shadow: $box-shadow;
}

.evaluation1_statement_text {
  font-size: 20px;
  text-align: center;
}

.evaluation1_answers {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

//Vista final
.evaluation1_Final {
  padding: 10px;
}

//Posición
.evaluation1_answers_up {
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
}

.evaluation1_answers_buttom {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}

//Final
.evaluation1_answers_final {
  margin-top: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  box-shadow: $box-shadow;
}

//Botones
.answers__A {
  background: linear-gradient(to right, #a243fc, #3b096a);
  width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-right: 5px;
}

.answers__B {
  background: linear-gradient(to right, #16e243, #368d49);
  width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-left: 5px;
}

.answers__C {
  background: linear-gradient(to right, #ff0404, #ba0d0d);
  width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-right: 5px;
}

.answers__D {
  background: linear-gradient(to right, #03d2ff, #0bb1d6);
  width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-left: 5px;
}

/* Buttom */
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
