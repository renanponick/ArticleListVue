<template>
    <v-container id="listar">
        <v-row class="text-center">
           <v-data-table
            :headers="cabecalho"
            :items="tarefas"
            item-key="nome"
            show-select = true
           
            class="elevation-1"
            >
            </v-data-table> 


            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    id="teste"
                    class="mt-4 ml-4"
                    label="Digite aqui..."
                    :rules="rules"
                    hide-details="auto"
                ></v-text-field>

                <v-btn
                    color="success"
                    class="mr-4"
                    @click="adicionar"
                >
                    Validate
                </v-btn>
            </v-form>
        </v-row>
    </v-container>
</template>


<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Listas',
    computed: {
      ...mapState(['lista'])
    },
    data: () => ({
        singleSelect: false,
        selected: [],
        cabecalho: [
          { text: 'Lista', align: 'start', value: 'nome' },
          { text: 'Excluir', align: 'end', value: 'excluir' }
        ],
        //aqui sera colocado o conteudo da lista
        tarefas: [
          {
            nome: this.lista[0].nome,
            excluir: 'x',
          }
        ],
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),
    //mounted: function (){debugger;},
    methods: {
        adicionar () {
            alert(this.lista[0].nome);
        },
    },
};
</script>