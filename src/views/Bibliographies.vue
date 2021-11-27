<template>
  <div>
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
    <div class="bibliographies">
      <div
        v-for="(item, index) in bibliographies"
        :key="index"
        class="bibliography"
      >
        <div class="bibliography__image">
          <img :src="item.img" alt="" />
        </div>
        <div class="bibliography__content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Bibliographies",
  title: "Bibliografias - SENA",
  setup() {
    const bibliographies = ref([
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Barreto, J., Villarroya, A., y Calero, S. (2017).",
        paragraph:
          "Biomecánica de la marcha atlética. Análisis cinemático de su desarrollo y comparación con la marcha normal. Revista Cubana de Investigaciones Biomédicas Vol.36. Recuperado el 03 de octubre de 2018.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Berlanga de la Pacua, L. (2011).",
        paragraph:
          "La marcha atlética. Síntesis de medios y aspectos metodológicos para su entrenamiento. EfDeportes.com, Revista Digital, Buenos Aires, año 2016, No. 161, octubre de 2021. Disponible en: t.ly/Eqfd",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Carrasco, D. (2014).",
        paragraph:
          "Atletismo. Instituto nacional de educación física-universidad politécnica de Madrid. Recuperado el 15 de septiembre de 2018 de: t.ly/foII",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Copello, M. Alverdi, D. y Fuentes, N. (2013).",
        paragraph:
          "Sistema de orientaciones metodológicas para los deportes de combate en la categoría 13-14 años.  EFDeportes.com, Revista Digital. Buenos Aires, Nº 181, junio de 2013. Recuperado el 14 de junio 2015. Disponible en: t.ly/uOuz",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Couto J., Trigo E. (2014).",
        paragraph:
          "Motricidad humana y gestión municipal. Estudios Pedagógicos versión on line.Vol. 40 no. 1. Recuperado el 25 de mayo de 2021. Disponible en: t.ly/AWCu",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "EcuRed (21 de octubre de 2011).",
        paragraph: "La prueba atlética 1500 m.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Ferrero, C. J. (2011).",
        paragraph:
          "Redescubriendo el cuerpo a través de la ciudad. Encrucijadas, 2, 105-114. Recuperado el 04 de mayo de 2021.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "González, J. (2013) .",
        paragraph:
          "El entrenamiento de los deportes de combate en la actualidad. 10º Congreso Argentino y 5º Latinoamericano de Educación Física y Ciencias.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Hegedus, J. (2001).",
        paragraph:
          "Historia de la Maratón, hasta 1936. Revista Digital efdeportes, No. 32. Recuperado el día 02 de octubre de 2018 de: t.ly/L8qJ",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Hofferth, S., Sandberg, J. (2001).",
        paragraph:
          "Changes in American Children’s time 1981 - 1997. Science Direct. Volumen 6, 2001, p.p. 193 - 229. Recuperado el 04 de mayo de 2021. Disponible en: t.ly/K2ae",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Instituto Superior de Cultura Física “Manuel Fajardo” (2003).",
        paragraph:
          "Teoría y práctica general de la gimnasia. Recuperado el 22 de abril de 2021. Disponible en: t.ly/WF2q",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Lauterborn, D. (2001).",
        paragraph:
          "Arte marcial o deporte de combate. EFDeportes.com, Revista Digital. Buenos Aires, No.35, abril de 2001. Recuperado el 15 de enero de 2020 de: t.ly/f6a0",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Mata, E. (2008).",
        paragraph:
          " Factores psicosociales, fisiológicos y de estilo de vida en escolares de 11 a 14 años con y sin problemas evolutivos de coordinación motriz. [Tesis Doctoral]. Universidad de Castilla-La Mancha.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Makarov A.N. (s.f.).",
        paragraph: "Atletismo, Moscú, Ed. Proveshenie",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Mindeporte.gov.co. (2021).",
        paragraph: "Sistema nacional del deporte.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Olympic.com. (2021).",
        paragraph: "Comité Olímpico Internacional.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Rius, J. (2005).",
        paragraph:
          "Metodologías y técnicas de atletismo. Barcelona. Editorial Paidotribo.",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Rose, B., Larkin, D. & Berger, B. (1998).",
        paragraph:
          "The Importance of Motor Coordination for Children's Motivacional Orientación in Sport. Physical Activity Quarterly, 15 (4), 316.Recuperado el 04 de mayo de 2021. Disponible en: t.ly/0dM6",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Tobar Y, Zurata.J. (2013).",
        paragraph:
          "Guía metodológica para el perfeccionamiento de la técnica de la carrera en atletas fondistas del club trotahacheros del municipio de Tuquerres (tesis) Universidad. Tuquerres, Nariño. Recuperado el 23 de septiembre de 2018.",
      },
    ]);
    return {
      bibliographies,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.bibliographies {
  background-color: $background_color;
  margin: 40px auto 20px;
  border-radius: 60px;
  max-width: 1300px;
  padding: 60px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bibliography {
  display: flex;
  max-width: 1000px;
  min-width: 1000px;
  margin-bottom: 50px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
}
.bibliography__image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2ebf7;
  min-width: 225px;
  min-height: 225px;
}
.bibliography__content {
  background-color: #fff;
  width: 100%;
  min-width: 100px;
  padding: 20px 40px;
}
.bibliography p {
  margin-left: 20px;
  color: #6e798c;
}

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
