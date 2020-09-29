<template>
    <v-container id="lista">
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
  export default {
    name: 'Listas',

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
    }),
    methods: {
        adicionar () {
            alert(document.getElementById("teste").value);
        },
    },
};
</script>