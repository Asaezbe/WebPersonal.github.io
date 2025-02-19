import { createStore } from 'vuex';
import detalles from './dbformato.json'; // Asegúrate de que la ruta sea correcta

const store = createStore({
  state: {
    destinos: detalles // Guardamos los datos en el estado
  },
  mutations: {
    setDestinos(state, destinos) {
      state.destinos = destinos; // Mutación para actualizar los destinos
    }
  },
  actions: {
    fetchDestinos({ commit }) {
      commit('setDestinos', detalles); // Establece los destinos
    }
  }
});



export default store; 


