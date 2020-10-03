<template>
  <v-app>
    <v-app-bar      
      app
      color="primary"
      dark
    >
      <h1 class="font-weight-bold m-4">{{titulo}}</h1>
    </v-app-bar>
    <v-main>
      <CadastrarLista/>
      <Listas/>
    </v-main>
  </v-app>
</template>

<script>
  import CadastrarLista from './components/CadastrarLista';
  import Listas from './components/Listas';
  
  export default {
    name: 'App',
    data(){
      return{
        titulo:"Welcome to List in Vue",
      }
    },
    components: {
      CadastrarLista,
      Listas,
    }
  }
</script>