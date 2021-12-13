<template>
  <menuComponent :index="4"></menuComponent>
  <main class="container-combat">
    <section class="module">
      <h1 class="module__title" id="principal-title">DEPORTES DE COMBATE</h1>
    </section>
    <section class="module">
      <div class="module__title-container" id="5.1">
        <h2 class="module__title">Historia</h2>
      </div>
      <div class="module__content">
        <p>
          <a
            target="_blank"
            class="cite"
            href="https://www.efdeportes.com/efd35/artm.htm"
            >Lauterborn, D. (2001).</a
          >
          El origen de las artes marciales se atribuye a la cultura oriental
          caracterizado por ser un pueblo con tradiciones ancestrales, el "arte
          marcial" fue la especialidad de los guerreros en Asia y reflejaba
          también un poder o una característica del Hombre. Cuando se habla de
          arte marcial se evoca cultura y conocimiento del cuerpo.
          <br /><br />El taoísmo es un sistema filosófico y religión que tuvo su
          origen en China en las ideas del filósofo Laozi (siglo VI a. C.); se
          caracteriza por creer que existe una solidaridad absoluta entre el
          hombre y la naturaleza, puesto que ambos concuerdan perfectamente y
          tienen un sustrato común. <br /><br />El nacimiento del deporte de
          combate resulta de la transformación del "arte marcial" y de su
          adaptación a la cultura contemporánea. La " dualidad ", el " resultado
          ", la " competición “, el " campeón”. Son palabras típicamente
          producto del individuo y no de propio de su Origen.
        </p>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="5.2">
        <h2 class="module__title">Clasificación</h2>
      </div>
      <div class="module__content">
        <p>
          Según la clasificación de
          <a target="_blank" class="cite" href=""
            >Visotzky (cómo se citó en González, 2013)</a
          >
          los deportes de combate se pueden clasificar en: golpeadores,
          agarradores y combinados. Los golpeadores son aquellos que utilizan
          los golpes para lograr la victoria los cuales son realizados con
          brazos, otros con piernas y brazos y el tiempo de duración de los
          rounds son de 1 a 3 minutos con un minuto de descanso. Cómo el boxeo,
          el taekwondo y el karate entre otros. <br /><br />Son características
          de los deportes de combate el poseer habilidades abiertas con un alto
          grado de incertidumbre, debido a que el luchador no sabe cómo actuará
          el oponente; fisiológicamente se puede decir que los esfuerzos
          realizados durante un combate se pueden enmarcar en anaeróbicos a
          lácticos, lácticos y de resistencia por la duración del combate.
          <a
            target="_blank"
            class="cite"
            href="http://www.efdeportes.com/efd181/orientaciones-para-los-deportes-de-combate.htm"
          >
            Para Copello (2013)
          </a>
          los deportes de combate se pueden caracterizar por un volumen elevado
          de elementos técnicos y esto implica un análisis de la metodología a
          utilizar, para lo cual es necesario tener en cuenta las condiciones en
          las cuales se realiza el entrenamiento y las orientaciones requeridas.
        </p>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="5.3">
        <h2 class="module__title">Material de apoyo</h2>
      </div>
      <div class="module__content material">
        <center>
          <p>
            En los siguientes botones podrás descargar el material
            complementario de la clase sobre Deportes de combate.
          </p>
        </center>
        <div class="botones__recursos">
          <a href="@/assets/pdf/deportes-combate.pdf" download
            ><button class="offset">
              Iniciación de deportes de combate
            </button></a
          >
        </div>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="5.4">
        <h2 class="module__title">Conclusiones</h2>
      </div>
      <div class="module__content">
        <p>
          Los argumentos presentados para los deportes de combate en el presente
          capitulo facilitarán al aprendiz del programa Técnico en Ejecución de
          Programas Deportivos del Sena identificar las características de los
          deportes de combate y adquirir algunas competencias básicas de la
          defensa personal.
        </p>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="5.5">
        <h2 class="module__title">¡Pónte a Prueba!</h2>
      </div>
      <div class="module__content">
        <div class="module__content material">
          <p>
            Ésta es la última sección de deportes de combate, donde demostrarás
            lo aprendido en cada uno de los módulos <br />
            <br />
            <center><strong>Tu trabajo es el siguiente</strong></center>
            • Preparar un ensayo utilizando los referentes presentados en el
            capitulo y el material de apoyo. Utilizar las normas apa para citas
            y referencias bibliográficas y hacer buen uso de ortografía.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import menuComponent from "@/components/menu.vue";

export default {
  name: "MotorSkills",
  title: "Deportes de Combate- SENA",
  components: {
    menuComponent,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

#principal-title {
  text-align: center;
}

// CAJA DE MATERIAL DE APOYO
.material {
  display: flex;
  flex-direction: column;
}

.botones__recursos {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

// <<<<<<<< FINAL BOTONES >>>>>
.offset {
  box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color);
}

.offset:hover,
.offset:focus {
  box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover);
}

.offset {
  --color: #1973bc;
  --hover: #19bc8b;
}

.test-button {
  --color: #9f11ac;
  --hover: #54cde2;
}

button {
  color: var(--color);
  -webkit-transition: 0.25s;
  transition: 0.25s;
}
button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;
}

button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

// <<<<<<<< FINAL BOTONES >>>>>

.text {
  color: $primary-color;
}
.container-combat {
  background-color: #cbdbf7;
  border-radius: 25px;
  margin: 0 100px 0 22vw;
  width: 74vw;
  min-height: 100vh;
  padding: 10px 0;
}
.module {
  background-color: #eff4fd;
  max-width: 90%;
  padding: 5px 30px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
  border-radius: 10px;
  &__title-container {
    text-align: center;
    z-index: 100;
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    background: #eff4fd;
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
