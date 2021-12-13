<template>
  <div class="home-link">
    <div class="home-link__container">
      <router-link to="/" class="home-link__button">
        <img src="@/assets/utilities/home.svg" alt="" class="home-link__icon" />
      </router-link>
    </div>
  </div>

  <main class="container-introduction">
    <section class="module">
      <div class="module__title-container">
        <h2 class="module__title">Introducción</h2>
      </div>
      <div class="module__content">
        <p>
          <center>
            <audio controls class="audio">
              <source src="@/assets/voice/voice.mp3" type="audio/mp3" />
            </audio>
          </center>
          <br />
          El deporte colombiano ha logrado en la última década grandes
          resultados en los principales eventos deportivos del mundo. Sin lugar
          a duda Colombia es tierra de talentos deportivos, pero aún con grandes
          debilidades en la estructura administrativa, presupuestal y técnica.
          <br /><br />
          La diversidad étnica, topográfica y cultural ha contribuido con el
          desarrollo de diferentes biotipos en Colombia, los cuales se pueden
          adaptar a características ideales de disciplinas deportivas, sin
          embargo, el logro de grandes resultados no se debe en su totalidad a
          una estructura deportiva a largo plazo que permita ir identificando y
          formando talentos deportivos, en Colombia la selección deportiva se
          hace por resultados.
          <br /><br />
          En el año 2019 se crea en Colombia el Ministerio del Deporte el cual
          deberá representar un avance para la estructura organizacional del
          deporte colombiano, pero dependerá de la asignación de los recursos
          presupuestales requeridos para mantener una estructura que favorezca
          en primer lugar a los deportistas.
          <br /><br />
          La estructura organizacional del deporte base debe iniciar en la etapa
          escolar de los niños colombianos para lo cual se debe capacitar
          personal que pueda contribuir con el desarrollo de las capacidades
          motoras, morfológicas y psicológicas las cuales deben utilizar como
          estrategia los deportes base como la gimnasia y las pruebas del
          atletismo.
          <br /><br />
          El proyecto para la iniciación y formación para el entrenamiento
          deportivo de acuerdo con el desarrollo motor del SENA apunta a la
          etapa inicial de una estructura de planificación deportiva a largo
          plazo, pero debe ser delimitado en cuanto a los contenidos debido a
          que llegar a ser un entrenador con formación estructurada en un
          deporte requiere especialización deportiva.
          <br /><br />
          Los contenidos de la cartilla han sido distribuidos en seis (6)
          capítulos, en el primero se tratan los contenidos del desarrollo
          motor, el segundo el concepto del desarrollo deporte, su origen,
          clasificación, organización del deporte olímpico, federado y nacional,
          en el tercero los conceptos técnicos y metodológicos básicos de la
          gimnasia, cuarto (4) el atletismo con el fin de que el aprendiz SENA
          del programa Técnico en Ejecución de Programas Deportivos posea una
          herramienta que le facilite adquirir competencias básicas las cuales
          servirán de base para el estudio de otros deportes. El quinto (5)
          capítulo es el de los deportes de combate en el cual se expone las
          características de los deportes de combate su clasificación y algunos
          ejercicios metodológicos básicos del boxeo. Finalmente, el sexto (6)
          capítulo es el de los deportes de conjunto de los cuales se expondrán
          los fundamentos básicos del voleibol, el baloncesto y algunos
          predeportivos.
          <br /><br />
          El conocimiento y aplicación por parte de los aprendices SENA del
          programa Técnico en Ejecución de Programas Deportivos de conceptos y
          habilidades del desarrollo motor de los seres humanos desde la primera
          infancia y su evolución en la etapa escolar con la práctica de la
          gimnasia y el atletismo como base seguido con la caracterización y
          desarrollo de competencias metodológicas para la enseñanza básica de
          conceptos técnicos de algunos deportes de combate y conjunto deberá
          contribuir con la demanda que requiere el país de formar personal para
          el deporte base el cual será el punto de partida para la
          especialización deportiva.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
//import {ref} from 'vue'
export default {
  name: "Introduction",
  title: "Introducción - SENA",
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

//boton salir
.home-link {
  background-color: $quinary-color;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 40px;
  height: 150px;
  border-radius: 0 20px 20px 0;
  z-index: 100;
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

.audio {
  width: 80%;
  height: 50px;
  z-index: 200;
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

///////////////////////////
.text {
  color: $primary-color;
}
.container-introduction {
  width: 80vw;
  margin: 0 auto;
  height: auto;
  background-color: #cbdbf7;
  display: flex;
  justify-content: center;
  border-radius: 25px;
}

.module {
  width: 80%;
  height: auto;
  background-color: #eff4fd;
  margin-top: 20px;
  padding: 5px 30px;
  border-radius: 10px;
  &__title-container {
    z-index: 100;
    width: max-content;
    height: auto;
    background: #eff4fd;
    padding: 0 10px;
    margin: 0 auto;
    border-radius: 10px;
  }
  &__title {
    margin: 0;
    width: 100%;
    font-size: 3rem;
    font-weight: 500;
    color: #393939;
    text-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
  }
  &__content {
    text-align: justify;
    width: 100%;
    z-index: 110;
    display: flex;
    color: #6e798c;
    border-radius: 1000px;
  }
}
</style>
