<template>
    <!-- Buttom -->
    <div class="home-link">
      <div class="home-link__container">
        <router-link to="/" class="home-link__button">
          <img
            src="@/assets/utilities/home.svg"
            alt=""
            class="home-link__icon"
          />
        </router-link>
      </div>
    </div>

    <div class="evaluation1">

        <h1 class="evaluation1_h1">Capítulo 1. La motricidad</h1>

      <!-- Pregunta 1 -->
      <div class="evaluation1_part" v-if="part == 1">
        <div class="evaluation1_statement">
          <p><strong>¿Qué factores determinan la variabilidad de masa ósea que ayudan al niño alcanzar la fuerza óptima?</strong></p>
          <p><strong>A:</strong> La ingesta nutricional </p>
          <p><strong>B:</strong> La actividad física </p>
          <p><strong>C:</strong> Todas las anteriores</p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="correcto">
        </div>
      </div>
      <!-- Pregunta 2 -->
      <div class="evaluation1_part" v-else-if="part == 2">
        <div class="evaluation1_statement">
          <p><strong>¿El desarrollo del sistema óseo muscular se presenta después de:?</strong></p>
          <p><strong>A:</strong> Adultez </p>
          <p><strong>B:</strong> juventud </p>
          <p><strong>C:</strong> Adolescencia </p>
          <p><strong>D:</strong> Niñez </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="correcto">
          <input class="answers__D" type="button" value="D" @click="incorrecto">          
        </div>
      </div>
      <!-- Pregunta 3 -->
      <div class="evaluation1_part" v-else-if="part == 3">
        <div class="evaluation1_statement">
          <p><strong>¿A qué edad desarrollan los niños la mayor parte de movimientos más grandes como habilidades motoras gruesas</strong></p>
          <p><strong>A:</strong> 5-8 años </p>
          <p><strong>B:</strong> 3-4 años </p>
          <p><strong>C:</strong> 1-6 años </p>
          <p><strong>D:</strong> 0-2 años </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="correcto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">
          <input class="answers__D" type="button" value="D" @click="incorrecto">          
        </div>
      </div>
      <!-- Pregunta 4 -->
      <div class="evaluation1_part" v-else-if="part == 4">
        <div class="evaluation1_statement">
          <p><strong>¿En qué edad los niveles hormonales son inferiores a los de un adulto</strong></p>
          <p><strong>A:</strong> Adolescencia  </p>
          <p><strong>B:</strong> Niñez </p>
          <p><strong>C:</strong> juventud </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="correcto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">         
        </div>
      </div>
      <!-- Pregunta 5 -->
      <div class="evaluation1_part" v-else-if="part == 5">
        <div class="evaluation1_statement">
          <p><strong>¿Qué fundamento es sano para el desarrollo óseo y muscular</strong></p>
          <p><strong>A:</strong> Alimentación saludable </p>
          <p><strong>B:</strong> Ingesta nutricional </p>
          <p><strong>C:</strong> Ninguna de las anteriores </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="correcto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">    
        </div>
      </div>
      <!-- Pregunta 6 -->
      <div class="evaluation1_part" v-else-if="part == 6">
        <div class="evaluation1_statement">
          <p><strong>¿En qué edad se incrementa la fuerza en los niños</strong></p>
          <p><strong>A:</strong> 2-3 años </p>
          <p><strong>B:</strong> 4-5 años </p>
          <p><strong>C:</strong> 0-1 años </p>
          <p><strong>D:</strong> 6-12 años </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">
          <input class="answers__D" type="button" value="D" @click="correcto">          
        </div>
      </div>
      <!-- Pregunta 7 -->
      <div class="evaluation1_part" v-else-if="part == 7">
        <div class="evaluation1_statement">
          <p><strong>El desarrollo psicológico en esta etapa de 6 a 12 años percibe el nombre de:</strong></p>
          <p><strong>A:</strong> Inmadurez infantil </p>
          <p><strong>B:</strong> Madurez infantil </p>
          <p><strong>C:</strong> Ninguna de las anteriores </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="correcto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">    
        </div>
      </div>
      <!-- Pregunta 8 -->
      <div class="evaluation1_part" v-else-if="part == 8">
        <div class="evaluation1_statement">
          <p><strong>¿El sistema óseo – muscular está formado por:</strong></p>
          <p><strong>A:</strong> Las articulaciones </p>
          <p><strong>B:</strong> La unión de los huesos </p>
          <p><strong>C:</strong> Los músculos </p>
          <p><strong>D:</strong> Todas son correctas </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">
          <input class="answers__D" type="button" value="D" @click="correcto">          
        </div>
      </div>
      <!-- Pregunta 9 -->
      <div class="evaluation1_part" v-else-if="part == 9">
        <div class="evaluation1_statement">
          <p><strong>¿Qué vitamina actúa en la regulación del equilibrio óseo en niños de 6 a 12 años?</strong></p>
          <p><strong>A:</strong> Vitamina A </p>
          <p><strong>B:</strong> Vitamina B </p>
          <p><strong>C:</strong> Vitamina D </p>
          <p><strong>D:</strong> Vitamina C </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="correcto">
          <input class="answers__D" type="button" value="D" @click="incorrecto">          
        </div>
      </div>
      <!-- Pregunta 10 -->
      <div class="evaluation1_part" v-else-if="part == 10">
        <div class="evaluation1_statement">
          <p><strong>¿Qué función no corresponde al sistema óseo en niños?</strong></p>
          <p><strong>A:</strong> Almacenar proteínas y glucógeno </p>
          <p><strong>B:</strong> Servir de palanca para los músculos  </p>
          <p><strong>C:</strong> Producir células sanguíneas  </p>
          <p><strong>D:</strong> Proteger órganos vitales </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="correcto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="incorrecto">
          <input class="answers__D" type="button" value="D" @click="incorrecto">          
        </div>
      </div>
      <!-- Pregunta 11 -->
      <div class="evaluation1_part" v-else-if="part == 11">
        <div class="evaluation1_statement">
          <p><strong>En cuántos tipos se dividen las capacidades físicas</strong></p>
          <p><strong>A:</strong> Coordinativas </p>
          <p><strong>B:</strong> Condicionales </p>
          <p><strong>C:</strong> Todas las anteriores </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="correcto">    
        </div>
      </div>
      <!-- Pregunta 12 -->
      <div class="evaluation1_part" v-else-if="part == 12">
        <div class="evaluation1_statement">
          <p><strong>Quién afirma que una baja coordinación motora puede propiciar que la motivación de los jóvenes hacia la práctica de la actividad física disminuya</strong></p>
          <p><strong>A:</strong> Hofferth y sandberg </p>
          <p><strong>B:</strong> Rose Larkin y Berger </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="correcto">
        </div>
      </div>
      <!-- Pregunta 13 -->
      <div class="evaluation1_part" v-else-if="part == 13">
        <div class="evaluation1_statement">
          <p><strong>¿Qué beneficios potenciales tiene la actividad física habitual para la salud?</strong></p>
          <p><strong>A:</strong> Mejora la salud ósea y cardiorrespiratoria </p>
          <p><strong>B:</strong> Mejora la actitud y masa muscular  </p>
          <p><strong>C:</strong> Todas las anteriores </p>
        </div>
        <div class="evaluation1_answers">
          <input class="answers__A" type="button" value="A" @click="incorrecto">
          <input class="answers__B" type="button" value="B" @click="incorrecto">
          <input class="answers__C" type="button" value="C" @click="correcto">    
        </div>
      </div>
      <div class="evaluation1_Final" v-else>
        <h1>Respuestas correctas {{correctas}}</h1>
        <h1>Respuestas incorrectas {{incorrectas}}</h1>
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
    let part = ref(1);
    let correctas = ref(0);
    let incorrectas = ref(0)

    //Funciones
    function correcto() {
      Swal.fire(
        'Respuesta correcta',
        'preciona ok para continuar',
        'success'
      )
      part.value = part.value + 1;
      correctas.value = correctas.value + 1;
    }

    function incorrecto(){
      Swal.fire(
        'Respuesta incorrecta',
        'preciona ok para continuar',
        'warning'
      )
      part.value = part.value + 1;
      incorrectas.value = incorrectas.value + 1;
    }

    //Retorno
    return {
     part, correctas,
     correcto, incorrectas,
     incorrecto,
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

//Botones
.answers__A {
  background: linear-gradient(to right, #A243FC, #3B096A);
  width: 500px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
}

.answers__B {
  margin-top: 20px;
  background: linear-gradient(to right, #16E243, #368D49);
  width: 500px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
}

.answers__C {
  margin-top: 20px;
  background: linear-gradient(to right, #FF0404, #BA0D0D);
  width: 500px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
}

.answers__D {
  margin-top: 20px;
  background: linear-gradient(to right, #03D2FF, #0BB1D6);
  width: 500px;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  border-style: none;
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
