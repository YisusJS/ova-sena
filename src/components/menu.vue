<template>
  <aside class="menu">
    <div class="submenu">
      <router-link
        tag="figure"
        to="/contenidos"
        class="submenu__item submenu__item--border"
      >
        <img class="submenu__icon" :src="back" alt="Imágen Volver" />
      </router-link>
      <figure class="submenu__item submenu__item--center">
        <img :src="sena" alt="Imágen Sena" />
      </figure>
      <router-link
        tag="figure"
        to="/"
        class="submenu__item submenu__item--border"
      >
        <img class="submenu__icon" :src="home" alt="Imágen Home" />
      </router-link>
    </div>
    <nav class="menu-principal">
      <ol class="list">
        <li v-for="(item, i) in information[index].submodules" :key="i">
          <a
            v-if="i != information[index].submodules.length - 1"
            class="nav-link"
            :href="item.contentId"
          >
            <div class="nav-link__image">
              <img :src="require('@/' + item.image)" alt="" />
            </div>
            <div class="nav-link__content">
              <h4 class="nav-link__title">{{ item.title }}</h4>
              <p class="nav-link__description">{{ item.description }}</p>
            </div>
          </a>
          <a v-else class="nav-link" :to="item.contentId">
            <div class="nav-link__image">
              <img :src="require('@/' + item.image)" alt="" />
            </div>
            <div class="nav-link__content">
              <h4 class="nav-link__title">{{ item.title }}</h4>
              <p class="nav-link__description">{{ item.description }}</p>
            </div>
          </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>
<script>
import home from "@/assets/utilities/home.svg";
import back from "@/assets/utilities/back.svg";
import sena from "@/assets/utilities/sena.svg";
import information from "@/assets/information.json";

export default {
  name: "Menu",
  props: {
    index: Number,
  },
  setup() {
    return {
      home,
      back,
      sena,
      information,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
figure {
  margin: 0;
}
.text {
  color: $primary-color;
}

.menu {
  max-width: 300px;
  background-color: $primary-color;
  border-radius: 1rem;
  position: fixed;
  z-index: 50;
  height: 100vh;
  overflow: hidden;
}
.submenu {
  display: flex;
  max-width: 200px;
  height: 50px;
  margin: 0 auto;
  justify-content: space-between;
  background-color: $quinary-color;
  margin-bottom: 50px;
  &__item {
    margin: 0;
    &--center {
      background: white;
      border-radius: 0 0 50px 50px;
      padding: 0 0.6rem 0.6rem;
      height: 35px;
    }
    &--border {
      position: relative;
      top: 20px;
      height: 50px;
      background-color: $quinary-color;
      padding: 0.3rem;
      border-radius: 0 0 15px 15px;
    }
  }
  &__icon {
    background: white;
    border-radius: 50%;
    padding: 0.2rem;
    display: block;
    box-shadow: 0 0 15px rgba($color: #000000, $alpha: 0.25);
  }
}

.list {
  list-style: none;
  padding: 10px;
  overflow: auto;
  height: 85vh;
  &::-webkit-scrollbar {
    display: none;
  }
}
.nav-link {
  border-radius: 20px;
  overflow: hidden;
  background: white;
  margin: 10px 0;
  box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
  display: flex;
  text-decoration: none;
  color: black;
  &__content {
    padding: 10px;
    width: 60%;
  }
  &__title {
    margin: 0;
    font-weight: normal;
  }
  &__description {
    margin: 0;
    font-size: 0.7rem;
    color: #6e798c;
  }
  &__image {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d2ebf7;
  }
}
</style>
