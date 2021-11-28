<template>
  <!-- Buttom -->
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>
  <div class="evaluation">
    <h1 class="evaluation_h1">{{ title }}</h1>
    <!-- Preguntas -->
    <div class="evaluation_part">
      <div v-if="part < test.length">
        <div class="evaluation_statement">
          <p class="evaluation_statement_text">
            <strong>Pregunta #{{ part + 1 }}: {{ test[part].question }}</strong>
          </p>
        </div>
        <div class="evaluation_answers">
          <button
            class="answers answers--A"
            @click="position(test[part].answers[0].correct)"
          >
            A: {{ test[part].answers[0].text }}
          </button>
          <button
            class="answers answers--B"
            @click="position(test[part].answers[1].correct)"
          >
            B: {{ test[part].answers[1].text }}
          </button>
          <button
            class="answers answers--C"
            @click="position(test[part].answers[2].correct)"
          >
            C: {{ test[part].answers[2].text }}
          </button>
          <button
            class="answers answers--D"
            @click="position(test[part].answers[3].correct)"
          >
            D: {{ test[part].answers[3].text }}
          </button>
        </div>
      </div>
      <div class="evaluation_answers_final" v-else>
        <center>
          <h1 style="text-center"><Strong>Resultados</Strong></h1>
        </center>
        <h2>Respuestas correctas: {{ correct }}</h2>
        <h2>Respuestas Incorrectas: {{ incorrect }}</h2>
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
  name: "Evaluation",
  title: "Evaluacion",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const test = ref([]);
    const title = ref("");
    const randomizer = (array) => {
      let newArray = [...array];
      // newArray = newArray.map(({ question, answers }) => {
      //   return {
      //     question,
      //     answers: answers.sort(() => Math.random() - 0.5),
      //   };
      // });
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
.evaluation {
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 20px;
  background-color: $background-color;
  box-sizing: border-box;
}

.evaluation_h1 {
  color: $font-color;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
}

.evaluation_part {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.evaluation_statement {
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  box-shadow: $box-shadow;
}

.evaluation_statement_text {
  font-size: 20px;
  text-align: center;
}

.evaluation_answers {
  max-width: 825px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 5px;
}

//Vista final
.evaluation_Final {
  padding: 10px;
}

//Posición
.evaluation_answers_up {
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
}

.evaluation_answers_buttom {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}

//Final
.evaluation_answers_final {
  margin-top: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  box-shadow: $box-shadow;
}

//Botones
.answers {
  width: 100%;
  max-width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  &--A {
    background: linear-gradient(to right, #a243fc, #3b096a);
  }

  &--B {
    background: linear-gradient(to right, #16e243, #368d49);
  }

  &--C {
    background: linear-gradient(to right, #ff0404, #ba0d0d);
  }

  &--D {
    background: linear-gradient(to right, #03d2ff, #0bb1d6);
  }
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
