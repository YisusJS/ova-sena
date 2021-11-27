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
    <h1 class="evaluation1_h1">{{ title }}</h1>
    <!-- Preguntas -->
    <div class="evaluation1_part">
      <div class="evaluation1_statement" v-if="part < test.length">
        <p class="evaluation1_statement_text">
          <strong>Pregunta #{{ part + 1 }}: {{ test[part].question }}</strong>
        </p>
      </div>
      <div class="evaluation1_answers">
        <div class="evaluation1_answers_up" v-if="part < test.length">
          <button
            class="answers__A"
            @click="position(test[part].answers[0].correct)"
          >
            A: {{ test[part].answers[0].text }}
          </button>
          <button
            class="answers__B"
            @click="position(test[part].answers[1].correct)"
          >
            B: {{ test[part].answers[1].text }}
          </button>
        </div>
        <div class="evaluation1_answers_buttom" v-if="part < test.length">
          <button
            class="answers__C"
            @click="position(test[part].answers[2].correct)"
          >
            C: {{ test[part].answers[2].text }}
          </button>
          <button
            class="answers__D"
            @click="position(test[part].answers[3].correct)"
          >
            D: {{ test[part].answers[3].text }}
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
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
import tests from "@/assets/evaluations.json";

export default {
  name: "Evaluation1",
  title: "Evaluacion",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const test = ref(null);
    const title = ref("");
    const randomizer = (array) => {
      let newArray = [...array];
      newArray = newArray.map(({ question, answers }) => {
        return {
          question,
          answers: answers.sort(() => Math.random() - 0.5),
        };
      });
      newArray.sort(() => Math.random() - 0.5);
      return newArray;
    };
    if (tests[route.params.submodule]) {
      test.value = randomizer(tests[route.params.submodule].questions);
      title.value = tests[route.params.submodule].title;
    } else {
      router.push("/");
    }
    //variables
    let part = ref(0);
    let correct = ref(0);
    let incorrect = ref(0);

    //Enunciados
    // const statement = ref([
    //   "¿Qué factores determinan la variabilidad de masa ósea que ayudan al niño alcanzar la fuerza óptima?",
    //   "¿El desarrollo del sistema óseo muscular se presenta después de:?",
    //   "¿A qué edad desarrollan los niños la mayor parte de movimientos más grandes como habilidades motoras gruesas?",
    //   "¿En qué edad los niveles hormonales son inferiores a los de un adulto?",
    //   "¿Qué fundamento es sano para el desarrollo óseo y muscular?",
    //   "¿En qué edad se incrementa la fuerza en los niños?",
    //   "El desarrollo psicológico en esta etapa de 6 a 12 años percibe el nombre de:",
    //   "El sistema óseo – muscular está formado por:",
    //   "¿Qué vitamina actúa en la regulación del equilibrio óseo en niños de 6 a 12 años?",
    //   "¿Qué función no corresponde al sistema óseo en niños?",
    //   "¿En cuántos tipos se dividen las capacidades físicas?",
    //   "¿Quién afirma que una baja coordinación motora puede propiciar que la motivación de los jóvenes hacia la práctica de la actividad física disminuya?",
    //   "¿Qué beneficios potenciales tiene la actividad física habitual para la salud?",
    // ]);

    // //Respuesta A
    // const answersA = ref([
    //   { text: "La ingesta nutricional", value: false },
    //   { text: "Adultez", value: false },
    //   { text: "5-8 años", value: false },
    //   { text: "Adolescencia", value: false },
    //   { text: "Alimentación saludable", value: true },
    //   { text: "2-3 años", value: false },
    //   { text: "Inmadurez infantil", value: false },
    //   { text: "Las articulaciones", value: false },
    //   { text: "Vitamina A", value: false },
    //   { text: "Almacenar proteínas y glucógeno", value: true },
    //   { text: "Coordinativas", value: false },
    //   { text: "Hofferth y sandberg", value: false },
    //   { text: "Mejora la salud ósea y cardiorrespiratoria", value: false },
    // ]);

    // //Respuesta B
    // const answersB = ref([
    //   { text: "La actividad física", value: false },
    //   { text: "juventud", value: false },
    //   { text: "3-4 años", value: true },
    //   { text: "Niñez", value: true },
    //   { text: "Ingesta nutricional", value: false },
    //   { text: "4-5 años", value: false },
    //   { text: "Madurez infantil", value: true },
    //   { text: "La unión de los huesos", value: false },
    //   { text: "Vitamina B", value: false },
    //   { text: "Servir de palanca para los músculos", value: false },
    //   { text: " Condicionales", value: false },
    //   { text: "Rose Larkin y Berger", value: true },
    //   { text: "Mejora la actitud y masa muscular", value: false },
    // ]);

    // //Respuesta C
    // const answersC = ref([
    //   { text: "Todas las anteriores", value: true },
    //   { text: "Adolescencia", value: true },
    //   { text: "1-6 años", value: false },
    //   { text: "juventud", value: false },
    //   { text: "Ninguna de las anteriores", value: false },
    //   { text: "0-1 años", value: false },
    //   { text: "Ninguna de las anteriores", value: false },
    //   { text: "Los músculos", value: false },
    //   { text: "Vitamina D", value: true },
    //   { text: "Producir células sanguíneas", value: false },
    //   { text: "Todas las anteriores", value: true },
    //   { text: "Stiven Smith", value: false },
    //   { text: "Todas las anteriores", value: true },
    // ]);

    // //Respuesta D
    // const answersD = ref([
    //   { text: "Ninguna de las anteriores", value: false },
    //   { text: "Niñez", value: false },
    //   { text: "0-2 años", value: false },
    //   { text: "juventud", value: false },
    //   { text: "Todas las anteriores", value: false },
    //   { text: "6-12 años", value: true },
    //   { text: "Todas las anteriores", value: false },
    //   { text: "Todas son correctas", value: true },
    //   { text: "Vitamina C", value: false },
    //   { text: "Proteger órganos vitales", value: false },
    //   { text: "Ninguna de las anteriores", value: false },
    //   { text: "Jacob Miller", value: false },
    //   { text: "Ninguna de las anteriores", value: false },
    // ]);

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
      // statement,
      // answersA,
      // answersB,
      // answersC,
      // answersD,
      title,
      test,
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
