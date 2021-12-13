<template>
  <menuComponent :index="5"></menuComponent>
  <main class="container-setSports">
    <section class="module">
      <h1 class="module__title" id="principal-title">DEPORTES DE CONJUNTO</h1>
    </section>
    <section class="module">
      <div class="module__title-container" id="6.1">
        <h2 class="module__title">Lorem ipsum dolor</h2>
      </div>
      <div class="module__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          minima cupiditate quos fuga doloribus repellendus vel accusantium non!
          Quisquam voluptate obcaecati velit eaque esse maiores molestias
          molestiae earum, ut sapiente? Aperiam consequuntur nobis quod unde
          ratione recusandae non suscipit ad dolore molestiae, voluptas
          blanditiis quam provident. Quidem vero aliquid repudiandae nobis
          soluta, officiis et officia saepe a similique reprehenderit! Voluptas?
          Id asperiores consequatur, omnis tempora distinctio aperiam similique
          nobis corporis sequi tempore eos nulla. Vitae adipisci alias
          consequatur sunt! Quasi sapiente facilis accusamus aperiam voluptatum
          ipsam neque hic qui ipsum? Impedit ut neque aliquid officia qui nemo
          tempora quidem suscipit exercitationem unde ducimus deserunt nobis,
          inventore tenetur nam perspiciatis accusamus itaque enim sequi
          voluptatem non! Impedit, explicabo deleniti? Quod, aspernatur.
          Corporis quod debitis repellendus delectus expedita! Dicta ipsa
          aliquam ipsam distinctio, ex quisquam voluptatem hic nisi eum quaerat
          aliquid, illum eius assumenda, reiciendis cum molestias non molestiae
          aspernatur nam voluptates! Esse necessitatibus laudantium maxime
          doloribus alias, deleniti impedit quo ea? A iste dolores repudiandae
          itaque fugiat saepe eos quam omnis enim ullam exercitationem esse,
          aperiam sed ipsum voluptate qui veritatis. Dolorum, molestiae alias?
          Recusandae molestiae quasi nostrum enim magni id quibusdam excepturi
          reprehenderit, maiores voluptates, assumenda quo quae rerum aperiam
          nobis quas in inventore quia commodi. Enim laudantium voluptates
          deserunt! Nulla, omnis veniam eligendi nam magnam excepturi ullam
          repellat, itaque impedit maiores beatae, suscipit possimus sit eveniet
          alias cumque aspernatur culpa aut cum eum ipsa consequuntur explicabo?
          Aliquam, dolorum earum. Inventore praesentium voluptatum sint
          cupiditate repellat! Culpa id, mollitia sit adipisci molestiae quae
          illum reprehenderit libero. Rerum ducimus cumque at optio placeat
          voluptate, quibusdam porro ab, veritatis eius itaque! Est. Earum
          labore, cupiditate nam dolores quo nisi ad neque omnis eum
          consectetur. Quibusdam sunt eveniet perspiciatis nulla. Voluptates
          adipisci porro delectus, aliquam, fuga illo repudiandae aliquid autem,
          ipsa tenetur quaerat. Laborum, velit maxime! Enim reprehenderit
          repellendus rerum quos? Error perspiciatis id molestias, reprehenderit
          voluptate necessitatibus ad fugiat minima? Possimus atque minima,
          corporis maiores cupiditate ratione perspiciatis molestias harum
          incidunt totam? Dicta mollitia optio, iure adipisci reprehenderit,
          voluptatibus sed fuga quae qui nobis inventore. Sapiente, animi earum?
          Ex ipsum placeat, eveniet suscipit mollitia id quasi eaque laboriosam
          nemo, est aliquam quibusdam. Maxime magnam vero non? Sed, quasi?
          Veniam est quas, odio tenetur ea dolor blanditiis aliquam maxime,
          nobis non delectus alias neque sint reiciendis, ab itaque atque
          voluptatem! Sit, cumque nam. Omnis cum nam veritatis quis consectetur
          doloremque rerum sit minus asperiores, nobis alias perferendis
          doloribus quos quo inventore eveniet ipsam modi sunt, saepe non atque.
          Deleniti repellendus veritatis fugiat ex! Voluptates eos mollitia sed
          recusandae, a laboriosam sunt quisquam explicabo inventore repellat
          tempore nostrum sint! Tempora consequuntur, consequatur vel inventore
          ipsum quos quo nam voluptatum libero culpa reprehenderit impedit enim.
          Mollitia dolor quod itaque ipsa asperiores alias, ea facilis eos eum
          magnam veniam voluptatem deserunt at unde id enim perferendis soluta,
          quisquam dignissimos dolorum! Quos earum rem maxime iste corrupti.
          Excepturi quidem minus nesciunt consectetur, suscipit neque molestiae
          dignissimos aspernatur. Eius fugiat eligendi aliquid omnis quos
          excepturi animi velit distinctio soluta maiores voluptatem nisi minima
          totam quo magnam, mollitia cum? Doloremque eveniet eos perferendis!
          Temporibus dolor suscipit odit alias. Dicta neque dolore facere, esse
          praesentium architecto minima rem unde modi quasi fugiat mollitia
          laborum veritatis ipsa nisi, quisquam necessitatibus facilis? Ipsam
          quae, impedit excepturi quos debitis pariatur aliquid dolor cupiditate
          illo saepe id, sit consequatur in laudantium blanditiis, aliquam culpa
          earum? Molestias quia qui impedit repellat. In consequuntur voluptate
          provident. Commodi possimus quasi exercitationem consequatur illo
          ipsam, explicabo distinctio odit veniam, eius impedit nemo temporibus
          omnis necessitatibus numquam neque totam, laboriosam iusto. Quidem sit
          omnis odit dolore amet. Deserunt, nostrum?
        </p>
      </div>
    </section>
  </main>
</template>
<script>
import menuComponent from "@/components/menu.vue";
export default {
  name: "SetSports",
  title: "Deportes de Conjunto - SENA",
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
.container-setSports {
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
