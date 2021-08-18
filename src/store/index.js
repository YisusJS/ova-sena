// Importamos el createStore
import { createStore } from "vuex";
// Importamos las acciones
import * as actions from "./actions.js";
// Importamos las mutaciones
import mutations from "./mutations.js";

const state = {
  variable: [],
};

// Exportamos las funcionalidades de vuex
export default createStore({
  state,
  actions,
  mutations,
});
