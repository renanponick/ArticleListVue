import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      lista: {
        id:'',
        ordem: 0,
        descricao: '',
        finalizada: false,
      }
    },
    mutations:{
        SET_LISTA (store, obj){
            store.lista = obj.lista
        }
    }
});