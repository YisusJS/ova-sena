<template>
<<<<<<< HEAD
  <!-- Buttom -->
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>

  <div class="evaluation1">
    <h1 class="evaluation1_h1">Capítulo 1. La motricidad</h1>

    <!-- Pregunta 1 -->
    <div class="evaluation1_part" v-if="part == 1">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿Qué factores determinan la variabilidad de masa ósea que ayudan al
            niño alcanzar la fuerza óptima?</strong
          >
        </p>
        <p><strong>A:</strong> La ingesta nutricional</p>
        <p><strong>B:</strong> La actividad física</p>
        <p><strong>C:</strong> Todas las anteriores</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="correcto" />
      </div>
    </div>
    <!-- Pregunta 2 -->
    <div class="evaluation1_part" v-else-if="part == 2">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿El desarrollo del sistema óseo muscular se presenta después
            de:?</strong
          >
        </p>
        <p><strong>A:</strong> Adultez</p>
        <p><strong>B:</strong> juventud</p>
        <p><strong>C:</strong> Adolescencia</p>
        <p><strong>D:</strong> Niñez</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="correcto" />
        <input class="answers__D" type="button" value="D" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 3 -->
    <div class="evaluation1_part" v-else-if="part == 3">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿A qué edad desarrollan los niños la mayor parte de movimientos más
            grandes como habilidades motoras gruesas</strong
          >
        </p>
        <p><strong>A:</strong> 5-8 años</p>
        <p><strong>B:</strong> 3-4 años</p>
        <p><strong>C:</strong> 1-6 años</p>
        <p><strong>D:</strong> 0-2 años</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="correcto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
        <input class="answers__D" type="button" value="D" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 4 -->
    <div class="evaluation1_part" v-else-if="part == 4">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿En qué edad los niveles hormonales son inferiores a los de un
            adulto</strong
          >
        </p>
        <p><strong>A:</strong> Adolescencia</p>
        <p><strong>B:</strong> Niñez</p>
        <p><strong>C:</strong> juventud</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="correcto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 5 -->
    <div class="evaluation1_part" v-else-if="part == 5">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿Qué fundamento es sano para el desarrollo óseo y muscular</strong
          >
        </p>
        <p><strong>A:</strong> Alimentación saludable</p>
        <p><strong>B:</strong> Ingesta nutricional</p>
        <p><strong>C:</strong> Ninguna de las anteriores</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="correcto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 6 -->
    <div class="evaluation1_part" v-else-if="part == 6">
      <div class="evaluation1_statement">
        <p>
          <strong>¿En qué edad se incrementa la fuerza en los niños</strong>
        </p>
        <p><strong>A:</strong> 2-3 años</p>
        <p><strong>B:</strong> 4-5 años</p>
        <p><strong>C:</strong> 0-1 años</p>
        <p><strong>D:</strong> 6-12 años</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
        <input class="answers__D" type="button" value="D" @click="correcto" />
      </div>
    </div>
    <!-- Pregunta 7 -->
    <div class="evaluation1_part" v-else-if="part == 7">
      <div class="evaluation1_statement">
        <p>
          <strong
            >El desarrollo psicológico en esta etapa de 6 a 12 años percibe el
            nombre de:</strong
          >
        </p>
        <p><strong>A:</strong> Inmadurez infantil</p>
        <p><strong>B:</strong> Madurez infantil</p>
        <p><strong>C:</strong> Ninguna de las anteriores</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="correcto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 8 -->
    <div class="evaluation1_part" v-else-if="part == 8">
      <div class="evaluation1_statement">
        <p><strong>¿El sistema óseo – muscular está formado por:</strong></p>
        <p><strong>A:</strong> Las articulaciones</p>
        <p><strong>B:</strong> La unión de los huesos</p>
        <p><strong>C:</strong> Los músculos</p>
        <p><strong>D:</strong> Todas son correctas</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
        <input class="answers__D" type="button" value="D" @click="correcto" />
      </div>
    </div>
    <!-- Pregunta 9 -->
    <div class="evaluation1_part" v-else-if="part == 9">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿Qué vitamina actúa en la regulación del equilibrio óseo en niños
            de 6 a 12 años?</strong
          >
        </p>
        <p><strong>A:</strong> Vitamina A</p>
        <p><strong>B:</strong> Vitamina B</p>
        <p><strong>C:</strong> Vitamina D</p>
        <p><strong>D:</strong> Vitamina C</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="correcto" />
        <input class="answers__D" type="button" value="D" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 10 -->
    <div class="evaluation1_part" v-else-if="part == 10">
      <div class="evaluation1_statement">
        <p>
          <strong>¿Qué función no corresponde al sistema óseo en niños?</strong>
        </p>
        <p><strong>A:</strong> Almacenar proteínas y glucógeno</p>
        <p><strong>B:</strong> Servir de palanca para los músculos</p>
        <p><strong>C:</strong> Producir células sanguíneas</p>
        <p><strong>D:</strong> Proteger órganos vitales</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="correcto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="incorrecto" />
        <input class="answers__D" type="button" value="D" @click="incorrecto" />
      </div>
    </div>
    <!-- Pregunta 11 -->
    <div class="evaluation1_part" v-else-if="part == 11">
      <div class="evaluation1_statement">
        <p>
          <strong>En cuántos tipos se dividen las capacidades físicas</strong>
        </p>
        <p><strong>A:</strong> Coordinativas</p>
        <p><strong>B:</strong> Condicionales</p>
        <p><strong>C:</strong> Todas las anteriores</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="correcto" />
      </div>
    </div>
    <!-- Pregunta 12 -->
    <div class="evaluation1_part" v-else-if="part == 12">
      <div class="evaluation1_statement">
        <p>
          <strong
            >Quién afirma que una baja coordinación motora puede propiciar que
            la motivación de los jóvenes hacia la práctica de la actividad
            física disminuya</strong
          >
        </p>
        <p><strong>A:</strong> Hofferth y sandberg</p>
        <p><strong>B:</strong> Rose Larkin y Berger</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="correcto" />
      </div>
    </div>
    <!-- Pregunta 13 -->
    <div class="evaluation1_part" v-else-if="part == 13">
      <div class="evaluation1_statement">
        <p>
          <strong
            >¿Qué beneficios potenciales tiene la actividad física habitual para
            la salud?</strong
          >
        </p>
        <p><strong>A:</strong> Mejora la salud ósea y cardiorrespiratoria</p>
        <p><strong>B:</strong> Mejora la actitud y masa muscular</p>
        <p><strong>C:</strong> Todas las anteriores</p>
      </div>
      <div class="evaluation1_answers">
        <input class="answers__A" type="button" value="A" @click="incorrecto" />
        <input class="answers__B" type="button" value="B" @click="incorrecto" />
        <input class="answers__C" type="button" value="C" @click="correcto" />
      </div>
=======
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
        <div class="evaluation1_statement" v-if="part <= 12">
          <p class="evaluation1_statement_text"><strong>Pregunta #{{part+1}}: {{statement[part]}}</strong></p>
        </div>
        <div class="evaluation1_answers">
          <div class="evaluation1_answers_up" v-if="part <= 12">
          <button class="answers__A" @click="position(answersA[part].value)">A: {{answersA[part].text}}</button>
          <button class="answers__B" @click="position(answersB[part].value)">B: {{answersB[part].text}}</button>
          </div>
          <div class="evaluation1_answers_buttom" v-if="part <= 12">
          <button class="answers__C" @click="position(answersC[part].value)">C: {{answersC[part].text}}</button>
          <button class="answers__D" @click="position(answersD[part].value)">D: {{answersD[part].text}}</button>
          </div>
          <div class="evaluation1_answers_final" v-else>
            <center><h1 style="text-center"><Strong>Resultados</Strong></h1></center>
            <h2>Respuestas correctas: {{correct}}</h2> 
            <h2>Respuestas Incorrectas: {{incorrect}}</h2>
          </div>
        </div>
      </div>
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
    </div>
    <div class="evaluation1_Final" v-else>
      <h1>Respuestas correctas {{ correctas }}</h1>
      <h1>Respuestas incorrectas {{ incorrectas }}</h1>
    </div>
  </div>
</template>
<script>
//Importacion de herramientas
import { ref } from "vue";
<<<<<<< HEAD
import Swal from "sweetalert2";
=======
import Swal from 'sweetalert2'

>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
export default {
  name: "Evaluation1",
  title: "Evaluacion modulo 1 - SENA",
  setup() {
    //variables
<<<<<<< HEAD
    let part = ref(1);
    let correctas = ref(0);
    let incorrectas = ref(0);

    //Funciones
    function correcto() {
      Swal.fire("Respuesta correcta", "preciona ok para continuar", "success");
      part.value = part.value + 1;
      correctas.value = correctas.value + 1;
    }

    function incorrecto() {
      Swal.fire(
        "Respuesta incorrecta",
        "preciona ok para continuar",
        "warning"
      );
      part.value = part.value + 1;
      incorrectas.value = incorrectas.value + 1;
=======
    let part = ref(0);
    let correct = ref(0);
    let incorrect = ref(0);

    //Enunciados
    const statement = ref([
    '¿Qué factores determinan la variabilidad de masa ósea que ayudan al niño alcanzar la fuerza óptima?',
    '¿El desarrollo del sistema óseo muscular se presenta después de:?', 
    '¿A qué edad desarrollan los niños la mayor parte de movimientos más grandes como habilidades motoras gruesas?',
    '¿En qué edad los niveles hormonales son inferiores a los de un adulto?',
    '¿Qué fundamento es sano para el desarrollo óseo y muscular?',
    '¿En qué edad se incrementa la fuerza en los niños?',
    'El desarrollo psicológico en esta etapa de 6 a 12 años percibe el nombre de:',
    'El sistema óseo – muscular está formado por:',
    '¿Qué vitamina actúa en la regulación del equilibrio óseo en niños de 6 a 12 años?',
    '¿Qué función no corresponde al sistema óseo en niños?',
    '¿En cuántos tipos se dividen las capacidades físicas?',
    '¿Quién afirma que una baja coordinación motora puede propiciar que la motivación de los jóvenes hacia la práctica de la actividad física disminuya?',
    '¿Qué beneficios potenciales tiene la actividad física habitual para la salud?'
    ]);

    //Respuesta A
    const answersA = ref([
      {text: 'La ingesta nutricional',value: false}, 
      {text: 'Adultez',value: false}, 
      {text: '5-8 años',value: false},
      {text: 'Adolescencia',value: false},
      {text: 'Alimentación saludable',value: true},
      {text: '2-3 años',value: false},
      {text: 'Inmadurez infantil',value: false},
      {text: 'Las articulaciones',value: false},
      {text: 'Vitamina A',value: false},
      {text: 'Almacenar proteínas y glucógeno',value: true},
      {text: 'Coordinativas',value: false},
      {text: 'Hofferth y sandberg',value: false},
      {text: 'Mejora la salud ósea y cardiorrespiratoria',value: false}
      ]);

    //Respuesta B
    const answersB = ref([
      {text: 'La actividad física', value: false},
      {text: 'juventud', value: false},
      {text: '3-4 años', value: true},
      {text: 'Niñez', value: true},
      {text: 'Ingesta nutricional', value: false},
      {text: '4-5 años', value: false},
      {text: 'Madurez infantil', value: true},
      {text: 'La unión de los huesos', value: false},
      {text: 'Vitamina B', value: false},
      {text: 'Servir de palanca para los músculos', value: false},
      {text: ' Condicionales', value: false},
      {text: 'Rose Larkin y Berger', value: true},
      {text: 'Mejora la actitud y masa muscular', value: false},
    ]);

    //Respuesta C
    const answersC = ref([
      {text: 'Todas las anteriores', value: true},
      {text: 'Adolescencia', value: true},
      {text: '1-6 años', value: false},
      {text: 'juventud', value: false},
      {text: 'Ninguna de las anteriores', value: false},
      {text: '0-1 años', value: false},
      {text: 'Ninguna de las anteriores', value: false},
      {text: 'Los músculos', value: false},
      {text: 'Vitamina D', value: true},
      {text: 'Producir células sanguíneas', value: false},
      {text: 'Todas las anteriores', value: true},
      {text: 'Stiven Smith', value: false},
      {text: 'Todas las anteriores', value: true},
    ]);

    //Respuesta D
    const answersD = ref([
      {text: 'Ninguna de las anteriores', value: false},
      {text: 'Niñez', value: false},
      {text: '0-2 años', value: false},
      {text: 'juventud', value: false},
      {text: 'Todas las anteriores', value: false},
      {text: '6-12 años', value: true},
      {text: 'Todas las anteriores', value: false},
      {text: 'Todas son correctas', value: true},
      {text: 'Vitamina C', value: false},
      {text: 'Proteger órganos vitales', value: false},
      {text: 'Ninguna de las anteriores', value: false},
      {text: 'Jacob Miller', value: false},
      {text: 'Ninguna de las anteriores', value: false},
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
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
    }

    //Retorno
    return {
<<<<<<< HEAD
      part,
      correctas,
      correcto,
      incorrectas,
      incorrecto,
=======
      statement, answersA, answersB, answersC, answersD,
      part, position, correct, incorrect
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
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
<<<<<<< HEAD
  background: linear-gradient(to right, #a243fc, #3b096a);
  width: 500px;
=======
  background: linear-gradient(to right, #A243FC, #3B096A);
  width: 400px;
  height: 250px;
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-right: 5px;
}

.answers__B {
<<<<<<< HEAD
  margin-top: 20px;
  background: linear-gradient(to right, #16e243, #368d49);
  width: 500px;
=======
  background: linear-gradient(to right, #16E243, #368D49);
  width: 400px;
  height: 250px;
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-left: 5px;
}

.answers__C {
<<<<<<< HEAD
  margin-top: 20px;
  background: linear-gradient(to right, #ff0404, #ba0d0d);
  width: 500px;
=======
  background: linear-gradient(to right, #FF0404, #BA0D0D);
  width: 400px;
  height: 250px;
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
  margin-right: 5px;
}

.answers__D {
<<<<<<< HEAD
  margin-top: 20px;
  background: linear-gradient(to right, #03d2ff, #0bb1d6);
  width: 500px;
=======
  background: linear-gradient(to right, #03D2FF, #0BB1D6);
  width: 400px;
  height: 250px;
>>>>>>> da9f712ef2ca8ed627fa377234dd87dfd9a1d508
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
