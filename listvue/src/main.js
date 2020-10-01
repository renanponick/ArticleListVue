import Vue from 'vue';
import Vuex from 'vuex';
import store from './vuex/store';
//import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex);

console.log(store.state) 

new Vue({
  el: '#app',
  store,
})