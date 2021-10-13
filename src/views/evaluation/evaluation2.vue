<template>
    <!-- Buttom -->
    <div class="home-link">
      <div class="home-link__container">
        <router-link to="/" class="home-link__button">
          <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon"/>
        </router-link>
      </div>
    </div>
    <div class="evaluation1">
      <h1 class="evaluation1_h1">Capítulo 1. La motricidad</h1>
      <!-- Preguntas -->
      <div class="evaluation1_part">
        <div class="evaluation1_statement" v-if="part <= 11">
          <p class="evaluation1_statement_text"><strong>Pregunta #{{part+1}}: {{statement[part]}}</strong></p>
        </div>
        <div class="evaluation1_answers">
          <div class="evaluation1_answers_up" v-if="part <= 11">
          <button class="answers__A" @click="position(answersA[part].value)">A: {{answersA[part].text}}</button>
          <button class="answers__B" @click="position(answersB[part].value)">B: {{answersB[part].text}}</button>
          </div>
          <div class="evaluation1_answers_buttom" v-if="part <= 11">
          <button class="answers__C" @click="position(answersC[part].value)">C: {{answersC[part].text}}</button>
          </div>
          <div class="evaluation1_answers_final" v-else>
            <center><h1 style="text-center"><Strong>Resultados</Strong></h1></center>
            <h2>Respuestas correctas: {{correct}}</h2> 
            <h2>Respuestas Incorrectas: {{incorrect}}</h2>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
//Importacion de herramientas
import { ref } from "vue";
import Swal from 'sweetalert2'

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
      '¿El deporte es considerado como?',
      '¿En qué siglo se extendió el deporte al público sin importar la clase social?',
      '¿Cuáles son los deportes individuales?',
      '¿Cuáles son los deportes grupales?',
      '¿Cuáles son los deportes de temporada?',
      '¿El atletismo se clasifica en pruebas de?',
      '¿Qué deportes utilizan el elemento peloto?',
      '¿En qué año los juegos olímpicos incluyeron 26 deportes con 36 disciplinas?',
      '¿En qué año fue creado el sistema nacional del deporte?',
      '¿Cuáles son los colores de los anillos olímpicos?',
      '¿Qué deportes resurgieron en la edad media y fueron los más populares?',
      '¿En qué edad la actividad deportiva decayó notablemente y solo era desarrollada por la nobleza?',
    ]);

    //Respuesta A
    const answersA = ref([
      {text: 'Hábitos saludables',value: false}, 
      {text: 'Siglo XIX',value: true},
      {text: 'Pesca, competencias en bote y rafting',value: false}, 
      {text: 'Fútbol, baloncesto, béisbol, voleibol, hockey',value: true},
      {text: 'Gimnasia artística, gimnasia rítmica, patinaje de carrera, patinaje artístico y pruebas',value: false}, 
      {text: 'Pista',value: false},
      {text: 'Natación, atletismo, levantamiento de pesas',value: false}, 
      {text: '2008',value: true},
      {text: '1994',value: false}, 
      {text: 'Rosado, morado, gris, blanco, negro',value: false},
      {text: 'Patinaje, béisbol, vóleibol',value: false},
      {text: 'Edad media',value: true}
    ]);

    //Respuesta B
    const answersB = ref([
      {text: 'Actividad física ',value: true}, 
      {text: 'Siglo XVII',value: false},
      {text: 'Futbol, voleibol, baloncesto, hockey y béisbol',value: false}, 
      {text: 'Gimnasia artística, gimnasia rítmica, patinaje de carrera, patinaje artístico y pruebas atléticas',value: false},
      {text: 'Pesca, competencias en bote y rafting',value: true}, 
      {text: 'Campo',value: false},
      {text: 'Baloncesto, billar, bolos',value: true}, 
      {text: '2006',value: false},
      {text: '1895',value: false}, 
      {text: 'Naranja, violeta, celeste, gris, rosado',value: false},
      {text: 'Danza, atletismo, natación',value: true},
      {text: 'Edad antigua',value: false}
    ]);

    //Respuesta C
    const answersC = ref([
      {text: 'Ninguna de las anteriores',value: false}, 
      {text: 'Siglo XVI',value: false},
      {text: 'Gimnasia artística, gimnasia rítmica, patinaje de carrera, patinaje artístico y pruebas atléticas',value: true}, 
      {text: 'Pesca, rafting y competencias en bote',value: false},
      {text: 'Futbol, hockey, baloncesto, béisbol, voleibol',value: false}, 
      {text: 'Todas las anteriores',value: true},
      {text: 'Patinaje, ciclismo boxeo',value: false}, 
      {text: '2000',value: false},
      {text: '1995',value: true}, 
      {text: 'Azul, amarillo, negro, verde, rojo',value: true},
      {text: 'Ciclismo, futbol, rafting',value: false},
      {text: 'Edad moderna',value: false}
    ]);

    //Funciones
    function position(datos){
      //Validar preguntas
      if (datos) {
        Swal.fire('Respuesta correcta','preciona ok para continuar','success');
        part.value = part.value + 1;
        correct.value = correct.value + 1;       
      } else {
        Swal.fire('Respuesta incorrecta','preciona ok para continuar','warning');
        part.value = part.value + 1; 
        incorrect.value = incorrect.value + 1;       
      }
    }

    //Retorno
    return {
      statement, answersA, answersB, answersC,
      part, position, correct, incorrect
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
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align:center;
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
  text-align:center
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
.evaluation1_answers_final{
  margin-top: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
  box-shadow: $box-shadow;
}

//Botones
.answers__A {
  background: linear-gradient(to right, #A243FC, #3B096A);
  width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-right: 5px;
}

.answers__B {
  background: linear-gradient(to right, #16E243, #368D49);
  width: 400px;
  height: 250px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-left: 5px;
}

.answers__C {
  background: linear-gradient(to right, #FF0404, #BA0D0D);
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
