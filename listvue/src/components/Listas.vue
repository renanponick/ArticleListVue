<template>
    <v-container>
        <v-row>
           <v-data-table
            :headers="cabecalho"
            :items="this.lista"
            item-key="nome"
            show-select = true
            class="col-12"
            >
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >mdi-delete
                </v-icon>
            </template>
            </v-data-table> 
        </v-row>
    </v-container>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
        ...mapState(['lista']),
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    data: () => ({
        singleSelect: false,
        selected: [],
        editedIndex: -1,
        cabecalho: [
          { text: 'Lista', align: 'start', value: 'nome' },
          { text: 'Ações', align: 'end', value: 'actions' }
        ] ,
       
    }),
    methods:{
    editItem (item) {
        document.getElementById("inputTarefa").value = item.nome;
        
    },

    deleteItem (item) {
        this.lista.splice(this.lista.indexOf(item),1);
    }, 

    }
    
};
</script>