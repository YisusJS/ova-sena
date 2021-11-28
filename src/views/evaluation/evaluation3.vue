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
      <div class="evaluation1_statement" v-if="part <= 9">
        <p class="evaluation1_statement_text">
          <strong>Pregunta #{{ part + 1 }}: {{ statement[part] }}</strong>
        </p>
      </div>
      <div class="evaluation1_answers">
        <div class="evaluation1_answers_up" v-if="part <= 9">
          <button class="answers__A" @click="position(answersA[part].value)">
            A: {{ answersA[part].text }}
          </button>
          <button class="answers__B" @click="position(answersB[part].value)">
            B: {{ answersB[part].text }}
          </button>
        </div>
        <div class="evaluation1_answers_buttom" v-if="part <= 9">
          <button class="answers__C" @click="position(answersC[part].value)">
            C: {{ answersC[part].text }}
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
      "¿Qué actividades fueron manifestaciones instintivas desarrolladas en la comunidad primitiva?",
      "¿En qué siglo se produce un resurgimiento de la cultura y un gran interés por la gimnasia?",
      "¿Quién influyó gravemente en la gimnasia pedagógica de la edad media?",
      "¿Quién desarrolla la escuela de gimnasia de Alemania?",
      "¿Que tipos fundamentales de gimnasia poseen orientación educativa y son llamadas?",
      "¿En cuantos grupos están divididos los ejercicios acrobáticos de elementos estáticos y de giros?",
      "¿Cuáles son las variedades de la gimnasia deportiva?",
      "¿Qué pre requisitos se necesitan para la técnica de parada de manos?",
      "¿Los gimnasios higiénicos tienen dos tipos fundamentales cuáles son?",
      "¿La gimnasia atlética se subdivide en cuantos grupos?",
    ]);

    //Respuesta A
    const answersA = ref([
      { text: "Carrera, salto", value: false },
      { text: "XIV, XV, XVI", value: true },
      { text: "Juan Comenius", value: false },
      { text: "Juan Enrique Pestalozzi", value: false },
      { text: "Básicas", value: false },
      { text: "3 Grupos", value: true },
      {
        text: "Gimnasia de trampolín, gimnasia estática, gimnasia rítmica",
        value: false,
      },
      {
        text: "Velocidad de piernas, parada de manos con impulso, fuerza de brazo",
        value: false,
      },
      { text: "Terapéutico", value: false },
      { text: "3 Grupos", value: true },
    ]);

    //Respuesta B
    const answersB = ref([
      { text: "Natación, lucha", value: false },
      { text: "XII, XIII, XI", value: false },
      { text: "Juan Jacobo Rousseau", value: true },
      { text: "juan Federico Guts Muths", value: true },
      { text: "Aplicadas", value: false },
      { text: "4 Grupos", value: false },
      {
        text: "Gimnasia artística, gimnasia rítmica, deportiva, acrobática",
        value: true,
      },
      {
        text: "Rollo adelante, contracción muscular, fuerza de brazo",
        value: true,
      },
      { text: "Higiénico", value: false },
      { text: "5 Grupos", value: false },
    ]);

    //Respuesta C
    const answersC = ref([
      { text: "Todas las anteriores", value: true },
      { text: "XVII, XVIII, XIX", value: false },
      { text: "julio Fernández Corujedo ", value: false },
      { text: "ninguna de las anteriores", value: false },
      { text: "Todas las anteriores", value: true },
      { text: "2 Grupos", value: false },
      { text: "Ninguna de las anteriores", value: false },
      { text: "Todas las anteriores", value: false },
      { text: "Todas las anteriores", value: true },
      { text: "2 Grupos", value: false },
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
