<template>
  <div class="contents">
    <router-link
      v-for="(item, index) in contents"
      :key="index"
      :to="item.path"
      class="lessons"
    >
      <div class="first">
        <figure class="first__background" :style="item.bg">
          <img :src="item.img" alt="Logo" />
        </figure>
      </div>
      <div class="second">
        <h2 class="second__title">
          Capítulo {{ index + 1 }}. {{ item.title }}
        </h2>
        <span class="second__sena">SENA</span>
        <p class="second_paragraph">{{ item.description }}</p>
      </div>
      <div class="third">
        <figure class="third__statistics">
          <img class="third__img" :src="clock" alt="" />
          <caption>
            <b class="third__bold">{{ item.hours }}</b>
            Horas
          </caption>
        </figure>
        <figure class="third__statistics">
          <img class="third__img" :src="lesson" alt="" />
          <caption>
            <b class="third__bold">{{ item.modules }}</b>
            Módulos
          </caption>
        </figure>
        <figure class="third__statistics">
          <img class="third__img" :src="person" alt="" />
          <caption>
            <b class="third__bold">Nivel {{ item.level }}</b>
          </caption>
        </figure>
      </div>
    </router-link>
    <router-link to="/" class="backhome">
      <figure class="home__bg">
        <img class="home__img" :src="home" alt="Home" />
      </figure>
    </router-link>
  </div>
</template>
<script>
// Importación de imágenes
import clock from "@/assets/contents/clock.svg";
import lesson from "@/assets/contents/lesson.svg";
import person from "@/assets/contents/person.svg";
import home from "@/assets/utilities/home.svg";

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
        img: require("@/assets/contents/motor-skills.svg"),
        title: "La Motricidad",
        description:
          "Se refiere a los movimientos complejos y coordinados que realiza una persona y que implican al sistema locomotor.",
        hours: "1",
        modules: "1",
        level: "fácil",
        path: "/contenidos/habilidades_motoras",
        bg: "background: linear-gradient(321.69deg, #3097AD 0%, #46D9F9 100%);",
      },
      // Capitulo 2 - El Deporte
      {
        color: "#CDA03F",
        img: require("@/assets/contents/sport.svg"),
        title: "El Deporte",
        description:
          "Es toda aquella actividad física que involucra una serie de reglas o normas a desempeñar dentro de un espacio o área determinada.",
        hours: "2",
        modules: "2",
        level: "medio",
        path: "/contenidos/deporte",
        bg: "background: linear-gradient(321.82deg, #FB6F6F 0%, #C7A42A 99.91%);",
      },
      // Capitulo 3 - La Gimnasia
      {
        color: "#00E56C",
        img: require("@/assets/contents/gymnastics.svg"),
        title: "La Gimnasia",
        description:
          "Es la disciplina que busca desarrollar, fortalecer y dar flexibilidad al cuerpo mediante rutinas de ejercicios físicos. ",
        hours: "3",
        modules: "3",
        level: "dificil",
        path: "/contenidos/gimnasia",
        bg: "background: linear-gradient(321.69deg, #1F9463 0%, #39E65F 71.13%);",
      },
      // Capitulo 4 - El Atletismo
      {
        color: "#FF7A7D",
        img: require("@/assets/contents/athleticism.svg"),
        title: "El Atletismo",
        description:
          "Es un deporte que contiene un conjunto de disciplinas agrupadas en carreras, saltos, lanzamientos, pruebas combinadas y marcha.",
        hours: "4",
        modules: "4",
        level: "fácil",
        path: "/contenidos/atletismo",
        bg: "background: linear-gradient(321.69deg, #FF5454 0%, #FF7D7D 100%);",
      },
      // Capitulo 5 - Deportes de Combate
      {
        color: "#E770F6",
        img: require("@/assets/contents/combats-sports.svg"),
        title: "Deportes de Combate",
        description:
          "Son deportes competitivos de contacto donde dos contrincantes luchan uno contra el otro usando ciertas reglas de contacto según la modalidad.",
        hours: "5",
        modules: "5",
        level: "medio",
        path: "/contenidos/deportes_de_combate",
        bg: "background: linear-gradient(321.69deg, rgba(131, 2, 190, 0.98) 1.04%, rgba(227, 116, 255, 0.98) 100%);",
      },
      // Capitulo 6 - Deportes de Conjunto
      {
        color: "#7E9DC0",
        img: require("@/assets/contents/sets-sports.svg"),
        title: "Deportes de Conjunto",
        description:
          "Son deportes en donde la prueba se realiza entre dos equipos rivales, cada uno compuesto por la misma cantidad de jugadores.",
        hours: "6",
        modules: "6",
        level: "dificil",
        path: "/contenidos/deportes_de_conjunto",
        bg: "background: linear-gradient(321.69deg, #02318C 0%, #90AAC9 100%);",
      },
    ]);

    return {
      contents,
      clock,
      lesson,
      person,
      home,
    };
  },
};
</script>
<style lang="scss" scoped>
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
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 40px;
  row-gap: 30px;
  justify-content: center;
  align-content: center;
}

.lessons {
  width: 600px;
  height: 140px;
  background-color: $secondary-color;
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 5px 5px $box-shadow;
  list-style: none;
  text-decoration: none;
  color: $primary-text;
}

.first {
  width: 20%;
}

.first__background {
  width: 90px;
  height: 100px;
  margin-left: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second {
  width: 50%;
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
  width: 30%;
}

.third__img {
  margin-right: 10px;
}

.third__bold {
  color: $primary-text;
  width: 30px;
}

.third__statistics {
  font-size: 10px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: $secondary-text;
}

.backhome {
  position: absolute;
  top: 94%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: $bg-home;
  width: 50px;
  height: 50px;
  border-radius: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.home__bg {
  background-color: $secondary-color;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}

.home__img {
  width: 30px;
  height: 30px;
  padding: 3px;
}
</style>
