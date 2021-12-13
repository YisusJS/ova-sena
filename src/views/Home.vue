<template>
  <div class="home">
    <div class="position">
      <div class="left">
        <div class="container1">
          <router-link class="container_router" to="/identification">
            <img class="container_image" :src="bibliographies" alt="Logo" />
            <h2 class="container_tittle">IDENTIFICACIÓN</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/problematic">
            <img class="container_image" :src="bibliographies" alt="Logo" />
            <h2 class="container_tittle">PROBLEMÁTICA</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/introduccion">
            <img class="container_image" :src="introduction" alt="Logo" />
            <h2 class="container_tittle">INTRODUCCIÓN</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/metas">
            <img class="container_image" :src="goals" alt="Logo" />
            <h2 class="container_tittle">RESULTADOS DE APRENDIZAJE</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/contenidos">
            <img class="container_image" :src="content" alt="Logo" />
            <h2 class="container_tittle">TABLA DE CONTENIDOS</h2>
          </router-link>
        </div>
        <div class="container1">
          <router-link class="container_router" to="/bibliografias">
            <img class="container_image" :src="bibliographies" alt="Logo" />
            <h2 class="container_tittle">REFERENTES BIBLIOGRÁFICOS</h2>
          </router-link>
        </div>
      </div>
      <div class="center">
        <h1>Ejecución de programas deportivos - SENA</h1>
        <img :src="x400" alt="Logos" />
      </div>
      <div class="right">
        <div class="container2">
          <div class="card__text">
            <h5 class="container2_tittle">
              Si dices que no puedes, estás restringiendo lo que puedes hacer o
              harás.
            </h5>
            <h4>Michael Phelps</h4>
          </div>
          <img class="container2_image" :src="profile1" alt="Logos" />
        </div>
        <div class="container2">
          <div class="card__text">
            <h5 class="container2_tittle">
              No te puedes poner ningún límite, no hay nada imposible.
            </h5>
            <h4>Usain Bolt</h4>
          </div>
          <img class="container2_image" :src="profile2" alt="Logos" />
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
import sena from "../assets/utilities/sena.svg";
import x400 from "../assets/home/background.png";
import profile1 from "../assets/icons/perfil1.svg";
import profile2 from "../assets/icons/perfil2.svg";

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
        img6: profile1,
        img7: profile2,
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
      profile1,
      profile2,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $tertyary_color;
  width: 100vw;
  height: 100vh;
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
  /* height: 80px; */
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
  margin-right: 30px;
  margin-left: -10px;
  padding-left: 10px;
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
