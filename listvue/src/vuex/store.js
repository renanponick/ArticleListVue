import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      lista: [
        {
          nome: 'teste',
          excluir: 'x',
        }
      ]
    },
    mutations:{
        SET_LISTA (store, obj){
            store.lista = obj.lista
        }
    }
});