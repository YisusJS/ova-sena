<template>
  <menuComponent :index="1"></menuComponent>
  <main class="container-motorSkills">
    <section class="module">
      <div class="module__title-container" id="2.1">
        <h2 class="module__title">Definición</h2>
      </div>
      <div class="module__content">
        <p>
          El deporte es considerado como actividad física que puede ser
          realizado de forma individual o grupal siguiendo una serie de reglas
          dentro de un espacio físico determinado, también puede ser recreativo,
          profesional o practicado como habito saludable. Generalmente es
          asociado a competencias de carácter formal que sirven para la salud
          física y mental recomendada por profesionales de la salud teniendo en
          cuenta los beneficios que genera en el organismo. Es común que se
          asocie el término deporte con actividad física o fitness, la
          diferencia reside en el carácter competitivo del deporte a comparación
          de que la actividad física y el fitness las personas lo realizan por
          satisfacción y recreo personal.
        </p>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="2.2">
        <h2 class="module__title">Historia del deporte</h2>
      </div>
      <div class="module__content">
        <p>
          En el periodo paleolítico medio, unos 33000 años antes de Cristo, se
          organizaban cazas en las distintas colonias y grupos sociales. También
          eran conocidas las danzas como rituales, cuya actividad física tenía
          una expresión netamente espiritual y de reconocimiento social. Los
          gimnasios de entrenamiento estaban ubicados cerca de las polis dentro
          de santuarios de los dioses, donde se realizaban los juegos y rituales
          religiosos al momento de iniciar las competencias.<br /><br />
          En la edad media tras la caída del Imperio romano, la actividad
          deportiva decayó notablemente y solo era desarrollada por la nobleza.
          El <strong>renacimiento se caracterizó por varios</strong> eventos
          importantes entre los cuales figura el resurgimiento del deporte como
          actividad de conexión entre el alma y el cuerpo, enmarcada en el culto
          a la salud y la educación física. La equitación, la natación, el
          atletismo y la danza fueron las más populares y dejaron de tener el
          carácter agresivo y de enfrentamiento que tenían antes.<br /><br />Con
          el Renacimiento llegó la Revolución Industrial, y con esta el
          desarrollo científico y técnico aplicado al deporte, dicha evolución
          conllevó a la creación de sistemas más estructurados de entrenamiento
          y equipamiento específico para lograr la perfección en cada
          disciplina. Durante el siglo XIX el deporte se extendió al público en
          general sin importar la clase social, y comenzaron a nacer
          organizaciones que crearon reglas y estándares de competencia. Así
          nacieron las ligas y nuevas disciplinas como ciclismo, esgrima, tiro y
          halterofilia, entre otros.
        </p>
      </div>
    </section>
    <section class="module">
      <div class="module__title-container" id="2.3">
        <h2 class="module__title">Clasificación del deporte</h2>
      </div>
      <div class="module__content">
        <p>
          Los deportes se pueden clasificar de acuerdo con la cantidad de
          personas que intervienen, según la temporada en la que se celebran y
          según algún tipo de característica que los identifica, como los
          deportes atléticos, deportes con pelota, de combate, de motor, de
          navegación y deslizamientos entre otros. <br /><br />
          Según la cantidad de personas que intervienen se pueden clasificar
          en:<br /><br />
          <a class="cite">Individuales</a>: Son aquellas actividades que son realizadas por una sola
          persona superando un objetivo medible por el tiempo, y compitiendo con
          otros para lograr la mayor puntuación tal caso como: la gimnasia
          artística, la gimnasia rítmica, el patinaje de carreras sobre ruedas,
          el patinaje artístico y las pruebas atléticas.<br /><br />
          <a class="cite">Grupales</a>: Es la unión de varios jugadores para conseguir el mismo
          objetivo, realizando una serie de acciones reglamentadas en
          colaboración, cooperación y participación de todos, para así vencer el
          equipo contrario, tal caso como: futbol, voleibol, baloncesto, hockey
          y béisbol entre otros.<br /><br />
          <a class="cite">Por la temporada</a>: como los deportes de verano entre los cuales se
          pueden enunciar la pesca, las competencias en bote y el rafting entre
          otros.
          <br /><br /><a class="cite">De invierno</a> son los deportes que se practican teniendo en
          cuenta las bajas temperaturas y la nieve como el patinaje sobre el
          hielo, el hockey el skit entre otros.<br /><br />
          <a class="cite">Atletismo</a>: se puede clasificar en pruebas de campo y pista. Dentro de
          las pruebas de campo se encuentran los saltos (triple, largo, alto,
          con garrocha), los lanzamientos (bala, disco, jabalina y martillo),
          pruebas de pista (100, 200, 400, 800, 1500, 3000 obstáculos, 5000 y
          10.000 metros), prueba 100 y 400 vallas y los relevos 4*100 y 4*400
          <br /><br />
          <a class="cite">Deportes con pelota</a>: Son aquellos que se desarrollan con el elemento
          pelota como el baloncesto, voleibol, balonmano, billar, bolos, futbol,
          futbol americano, rugby, hockey y kickball entre otros.<br /><br />
          <a class="cite">Combate</a>: los cuales se pueden clasificar en dos tipos de
          clasificaciones, los de agarre y los de golpeo, hacen parte de esta
          categoría el boxeo, la esgrima, el taekwondo, la lucha olímpica, la
          lucha grecorromana, el judo, el karate entre otros.<br /><br />
          <a class="cite">A motor</a>: Es el deporte que se practica ejecutando un vehículo, tal
          caso como: circuito de carreras, piloto de carreras, fórmula 1y
          fórmula 3.<br /><br /><a class="cite">De navegación</a>: Son los deportes acuáticos tal
          caso como: la natación, surf, waterpolo, buceo y saltos.<br /><br /><a class="cite">De deslizamiento</a>: Son los deportes que se practican deslizando el cuerpo
          sobre una superficie, tal caso como: el esquí.
        </p>
      </div>
    </section>
  </main>
</template>
<script>
import menuComponent from "@/components/menu.vue";

export default {
  name: "MotorSkills",
  title: "La Motricidad - SENA",
  components: {
    menuComponent,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

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
.container-motorSkills {
  background-color: $primary-color;
  border-radius: 25px;
  margin: 0 100px 0 22vw;
  width: 74vw;
  min-height: 100vh;
  padding: 100px 0;
}
.module {
  background-color: #fff;
  max-width: 90%;
  padding: 5px 30px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
  border-radius: 10px;
  &__title-container {
    z-index: 100;
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    width: max-content;
    height: auto;
    background: white;
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
