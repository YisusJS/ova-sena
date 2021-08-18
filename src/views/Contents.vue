<template>
  <div class="contents">
    <!-- <ul>
      <li v-for="(item, index) in contents" :key="index">
        {{ contents[index].title }}
      </li>
    </ul> -->
    <section class="lessons">
      <div class="first">
        <figure class="first__background">
          <img :src="motorSkills" alt="Logo" />
        </figure>
      </div>
      <div class="second">
        <h2 class="second__title">Capítulo 1 - La Motricidad</h2>
        <span class="second__sena">SENA</span>
        <p class="second_paragraph">
          Se refiere a los movimientos complejos y coordinados que realiza una
          persona y que implican al sistema locomotor.
        </p>
      </div>
      <div class="third">
        <figure class="third__statistics">
          <img class="third__img" :src="clock" alt="" />
          <caption>
            <b class="third__bold">10</b>
            Horas
          </caption>
        </figure>
        <figure class="third__statistics">
          <img class="third__img" :src="lesson" alt="" />
          <caption>
            <b class="third__bold">6</b>
            Módulos
          </caption>
        </figure>
        <figure class="third__statistics">
          <img class="third__img" :src="person" alt="" />
          <caption>
            <b class="third__bold">Nivel Medio</b>
          </caption>
        </figure>
      </div>
    </section>
  </div>
</template>
<script>
// Importación de imágenes
import motorSkills from "../assets/contents/motor-skills.svg";
import sport from "../assets/contents/sport.svg";
import gymnastics from "../assets/contents/gymnastics.svg";
import athleticism from "../assets/contents/athleticism.svg";
import combatSports from "../assets/contents/combats-sports.svg";
import setsSports from "../assets/contents/sets-sports.svg";
import clock from "../assets/contents/clock.svg";
import lesson from "../assets/contents/lesson.svg";
import person from "../assets/contents/person.svg";

// Importar funcionalidades de Vue
import { ref } from "vue";
export default {
  name: "Contents",
  title: "Contenidos - SENA",
  setup() {
    // Objeto con toda la información de la vista
    const contents = ref([
      // Capitulo 1 - La Motricidad
      {
        color: "#09D2ED",
        img: motorSkills,
        title: "La Motricidad",
        description:
          "Se refiere a los movimientos complejos y coordinados que realiza una persona y que implican al sistema locomotor.",
        hours: "10",
        modules: "6",
        level: "Medio",
      },
      // Capitulo 2 - El Deporte
      {
        color: "#CDA03F",
        img: sport,
        title: "El Deporte",
        description:
          "Es toda aquella actividad física que involucra una serie de reglas o normas a desempeñar dentro de un espacio o área determinada.",
        hours: "10",
        modules: "6",
        level: "Medio",
      },
      // Capitulo 3 - La Gimnasia
      {
        color: "#00E56C",
        img: gymnastics,
        title: "La Gimnasia",
        description:
          "Es la disciplina que busca desarrollar, fortalecer y dar flexibilidad al cuerpo mediante rutinas de ejercicios físicos. ",
        hours: "10",
        modules: "6",
        level: "Medio",
      },
      // Capitulo 4 - El Atletismo
      {
        color: "#FF7A7D",
        img: athleticism,
        title: "El Atletismo",
        description:
          "Es un deporte que contiene un conjunto de disciplinas agrupadas en carreras, saltos, lanzamientos, pruebas combinadas y marcha.",
        hours: "10",
        modules: "6",
        level: "Medio",
      },
      // Capitulo 5 - Deportes de Combate
      {
        color: "#E770F6",
        img: combatSports,
        title: "Deportes de Combate",
        description:
          "Son deportes competitivos de contacto donde dos contrincantes luchan uno contra el otro usando ciertas reglas de contacto según la modalidad.",
        hours: "10",
        modules: "6",
        level: "Medio",
      },
      // Capitulo 6 - Deportes de Conjunto
      {
        color: "#7E9DC0",
        img: setsSports,
        title: "Deportes de Conjunto",
        description:
          "Son deportes en donde la prueba se realiza entre dos equipos rivales, cada uno compuesto por la misma cantidad de jugadores.",
        hours: "10",
        modules: "6",
        level: "Medio",
      },
    ]);

    return {
      contents,
      motorSkills,
      clock,
      lesson,
      person,
    };
  },
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";
.contents {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1366px;
  max-width: 1366px;
  height: 100vh;
  background-color: $background-color;
}

.lessons {
  width: 600px;
  height: 140px;
  background-color: $secondary-color;
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 5px 5px $box-shadow;
}

.first {
  width: 20%;
}

.first__background {
  width: 90px;
  height: 100px;
  margin-left: 15px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #cfa8ff 0,
    #9d8bff 25%,
    #6c6cd8 50%,
    #3f4ea4 75%,
    #153375 100%
  );
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second {
  width: 52%;
}

.second__title {
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
}

.second__sena {
  font-size: 12px;
  color: $secondary-text;
  font-weight: 700;
  margin-left: 20px;
}

.second_paragraph {
  width: 80%;
  text-justify: center;
  font-size: 9px;
  color: $secondary-text;
  margin-left: 20px;
}

.third {
  width: 28%;
}

.third__img {
  margin-right: 10px;
}

.third__bold {
  color: $primary-text;
}

.third__statistics {
  font-size: 10px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: $secondary-text;
}
</style>
