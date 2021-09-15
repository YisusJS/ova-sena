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
        title: "Hofferth, S., Sandberg, J.",
        paragraph:
          "2001) Changes in American Children’s time 1981 – 1997. Science Direct. Volume 6, 2001, p.p. 193 – 229. Recuperado el 04 de mayo de 2021. Disponible en: https://www.sciencedirect.com/science/article/abs/pii/S1040260801800113",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Hofferth, S., Sandberg, J.",
        paragraph:
          "2001) Changes in American Children’s time 1981 – 1997. Science Direct. Volume 6, 2001, p.p. 193 – 229. Recuperado el 04 de mayo de 2021. Disponible en: https://www.sciencedirect.com/science/article/abs/pii/S1040260801800113",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Hofferth, S., Sandberg, J.",
        paragraph:
          "2001) Changes in American Children’s time 1981 – 1997. Science Direct. Volume 6, 2001, p.p. 193 – 229. Recuperado el 04 de mayo de 2021. Disponible en: https://www.sciencedirect.com/science/article/abs/pii/S1040260801800113",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Hofferth, S., Sandberg, J.",
        paragraph:
          "2001) Changes in American Children’s time 1981 – 1997. Science Direct. Volume 6, 2001, p.p. 193 – 229. Recuperado el 04 de mayo de 2021. Disponible en: https://www.sciencedirect.com/science/article/abs/pii/S1040260801800113",
      },
      {
        img: require("@/assets/bibliographies/bibliographies.svg"),
        title: "Hofferth, S., Sandberg, J.",
        paragraph:
          "2001) Changes in American Children’s time 1981 – 1997. Science Direct. Volume 6, 2001, p.p. 193 – 229. Recuperado el 04 de mayo de 2021. Disponible en: https://www.sciencedirect.com/science/article/abs/pii/S1040260801800113",
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
  background-color: $background-color;
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
