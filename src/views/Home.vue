<template>
  <div class="home">
    <h1 class="home_tittle">
      Técnica deportiva básica del programa Técnico en Ejecución de Programas
      Deportivos
    </h1>
    <div class="position">
      <div class="left">
        <div class="container1">
          <router-link class="container_router" to="/introduccion">
            <img class="container_image" :src="introduction" alt="Logo" />
            <h2 class="container_tittle">INTRODUCCIÓN</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/metas">
            <img class="container_image" :src="goals" alt="Logo" />
            <h2 class="container_tittle">OBJETIVOS</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/contenidos">
            <img class="container_image" :src="content" alt="Logo" />
            <h2 class="container_tittle">CONTENIDOS</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/bibliografias">
            <img class="container_image" :src="bibliographies" alt="Logo" />
            <h2 class="container_tittle">BIBLIOGRAFÍAS</h2>
          </router-link>
        </div>
      </div>
      <div class="center">
        <img class="center_image" :src="sena" alt="Logos" />
        <img :src="x400" alt="Logos" />
      </div>
      <div class="right">
        <div class="container2">
          <div class="card__text">
            <h5 class="container2_tittle">Comentario de un deportista</h5>
            <h4>By: X person</h4>
          </div>
          <img class="container2_image" :src="profile" alt="Logos" />
        </div>
        <div class="container2">
          <div class="card__text">
            <h5 class="container2_tittle">Comentario de un deportista</h5>
            <h4>By: X person</h4>
          </div>
          <img class="container2_image" :src="profile" alt="Logos" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Importación de imágenes
import introduction from "../assets/home/books.png";
import goals from "../assets/home/image.svg";
import content from "../assets/home/contents.svg";
import bibliographies from "../assets/home/bibliographies.svg";
import sena from "../assets/home/sena.svg";
import x400 from "../assets/home/background.png";
import profile from "../assets/home/atleta.jpg";

// Importar funcionalidades de Vue
import { ref } from "vue";

export default {
  name: "Home",
  title: "Inicio - SENA",
  setup() {
    //Return Imagenes
    const contents = ref([
      {
        img0: introduction,
        img1: goals,
        img2: content,
        img3: bibliographies,
        img4: sena,
        img5: x400,
        img6: profile,
      },
    ]);
    return {
      goals,
      introduction,
      contents,
      content,
      bibliographies,
      sena,
      x400,
      profile,
    };
  },
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";
.home {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1366px;
  max-width: 1366px;
  height: 100vh;
  background-color: $tertyary-color;
}

.home_tittle {
  text-align: center;
  width: 70%;
  margin-left: 250px;
  font-size: 30px;
}

.position {
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  background-color: $primary-color;
  padding: 10px;
  justify-content: space-around;
  border-radius: 20px;
}

.position div {
  text-align: center;
  width: 400px;
  margin: 10px;
  border-radius: 10px;
}

.left {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
}

.container_router {
  background-color: $secondary-color;
  display: flex;
  box-shadow: $box-shadow;
  border-radius: 20px;
  text-decoration: none;
  color: $primary-text;
}

.container_image {
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: $other-color;
  width: 80px;
  height: 80px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.container_tittle {
  width: 300px;
}

// center

.center_image {
  height: 80px;
  width: 80px;
  background: $secondary-color;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

//right

.right {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
}

.container2 {
  display: flex;
  flex-direction: row;
  background-color: $secondary-color;
  box-shadow: $box-shadow;
}

.container2_image {
  padding-left: 15px;
  padding-top: 50px;
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.container2_tittle {
  width: 250px;
  height: 40px;
  padding: 5px;
  color: $quaternary-color;
}

.card__text {
  display: flex;
  flex-direction: column;
}
</style>
