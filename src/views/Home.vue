<!-- Creditos de iconos: flaticon.com -->
<template>
  <div class="home">
    <div class="home-card">
      <h1 class="home-card__title">
        Objeto virtual para la enseñanza y el aprendizaje de la técnica
        deportiva básica
      </h1>
      <div class="home-card__container">
        <ul class="home-menu">
          <li class="menu-link">
            <router-link class="menu-link__container" to="/identification">
              <img class="menu-link__img" :src="bibliographies" alt="Logo" />
              <h2 class="menu-link__title">IDENTIFICACIÓN</h2>
            </router-link>
          </li>
          <li class="menu-link">
            <router-link class="menu-link__container" to="/problematic">
              <img class="menu-link__img" :src="bibliographies" alt="Logo" />
              <h2 class="menu-link__title">PROBLEMÁTICA</h2>
            </router-link>
          </li>
          <li class="menu-link">
            <router-link class="menu-link__container" to="/introduccion">
              <img class="menu-link__img" :src="introduction" alt="Logo" />
              <h2 class="menu-link__title">INTRODUCCIÓN</h2>
            </router-link>
          </li>
          <li class="menu-link">
            <router-link class="menu-link__container" to="/metas">
              <img class="menu-link__img" :src="goals" alt="Logo" />
              <h2 class="menu-link__title">RESULTADOS DE APRENDIZAJE</h2>
            </router-link>
          </li>
          <li class="menu-link">
            <router-link class="menu-link__container" to="/contenidos">
              <img class="menu-link__img" :src="content" alt="Logo" />
              <h2 class="menu-link__title">TABLA DE CONTENIDOS</h2>
            </router-link>
          </li>
          <li class="menu-link">
            <router-link class="menu-link__container" to="/bibliografias">
              <img class="menu-link__img" :src="bibliographies" alt="Logo" />
              <h2 class="menu-link__title">REFERENTES BIBLIOGRÁFICOS</h2>
            </router-link>
          </li>
        </ul>
        <article class="home-information">
          <h2 class="information__title">
            Centro Agroturistico - Regional Santander - Sede San Gil
          </h2>
          <img class="information__logo" :src="sena" alt="" />
          <div class="information__container">
            <section class="information__section">
              <h3 class="information__subtitle">Autor</h3>
              <a
                class="information__link"
                href="https://orcid.org/0000-0002-0865-176X"
              >
                Edwin Raúl Guerra Santos
              </a>
              <a class="information__link" href="mailto:erguerras@sena.edu.co">
                erguerras@sena.edu.co
              </a>
              <span>
                Celular:
                <a class="information__link" href="tel:+57 3162238528">
                  3162238528
                </a>
              </span>
            </section>
            <section class="information__section">
              <h3 class="information__subtitle">Coautor</h3>
              <span>Camilo Garay</span>
            </section>
            <section class="information__section">
              <h3 class="information__subtitle">Aprendices colaboradores</h3>
              <ul class="information__list">
                <li>John Alexander Sarmiento Morales</li>
                <li>Edwin Jesús Páez Rueda</li>
                <li>Ferley Esteban Arias Pulido</li>
                <li>Darien Josue Romero Murillo</li>
              </ul>
            </section>
          </div>
        </article>
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
  min-height: 100vh;
  background-color: $tertyary_color;
}

.home_tittle {
  text-align: center;
  width: 70%;
  margin-left: 250px;
  font-size: 30px;
}

.home-card {
  margin: 40px;
  background-color: $primary-color;
  padding: 10px 30px;
  border-radius: 40px;
  max-width: 1300px;
  width: 100%;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
  &__title {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
}

.home-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  .menu-link {
    max-width: 400px;
    width: 100%;
    min-width: 350px;
    &__container {
      background-color: $secondary-color;
      display: flex;
      align-items: center;
      box-shadow: $box-shadow;
      border-radius: 20px;
      text-decoration: none;
      color: $primary-text;
    }
    &__img {
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: $other-color;
      max-width: 80px;
      width: 100%;
      height: 100%;
      /* height: 80px; */
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }
    &__title {
      max-width: 300px;
      height: min-content;
      margin: 0;
      padding: 0 20px;
    }
  }
}

.position div {
  text-align: center;
  width: 400px;
  margin: 10px;
  border-radius: 10px;
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

.home-information {
  background-color: $secondary-color;
  border-radius: 15px;
  box-shadow: $box-shadow;
  padding: 20px;
  max-width: 450px;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  .information {
    &__title {
      margin: 0;
    }
    &__subtitle {
      margin: 0;
    }
    &__link {
      color: $primary-text;
      text-decoration: none;
      width: max-content;
      &:hover {
        text-decoration: underline;
        color: $cite;
      }
    }
    &__logo {
      margin: 20px auto;
      display: block;
      width: 100px;
    }
    &__container {
      margin: 0 auto;
      max-width: 300px;
      width: 100%;
    }
    &__section {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__list {
      padding: 0;
      text-align: left;
    }
  }
}

@media screen and (min-width: 1125px) {
  .home-card__container {
    flex-direction: row;
    justify-content: space-between;
  }
  .home-information {
    margin-top: 0;
  }
  .home-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 650px;
  }
}

@media screen and (min-width: 750px) {
  .home-menu {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
