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
    props: ['some-property-here'],
    
    vuex: {
      getters: {},
      actions: {}
    },

    components: {
      CadastrarLista,
      Listas,
    },
    
    data () { // << some local state
      return {
        singleSelect: false,
        selected: [],
        cabecalho: [
          { text: 'Lista', align: 'start', value: 'nome' },
          { text: 'Excluir', align: 'end', value: 'excluir' }
        ],
        //aqui sera colocado o conteudo da lista
        tarefas: [
          {
            nome: 'Varrer',
            excluir: 'x',
          },
          {
            nome: 'Lavar Louça',
            excluir: 'x',
          },
          {
            nome: 'Trocar TV',
            excluir: 'x',
          },
        ],
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
      }
    }
  }
</script>