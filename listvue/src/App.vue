<template>
  <v-app>
    <v-app-bar      
      app
      color="primary"
      dark
    >
      <h1 class="font-weight-bold m-4">
        Welcome to List in Vue
      </h1>
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

    components: {
      CadastrarLista,
      Listas,
    }
  }
</script>