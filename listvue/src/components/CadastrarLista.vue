<template v-slot:top>
  <v-container>
    <v-row class="text-center">
      <v-form
        ref="form"
        lazy-validation
        class="col-12"
      >
        <v-text-field
          v-model="inpTarefa"
          id="inputTarefa"
          class="col-4"
          label="Tarefa..."
          autocomplete="off"
        ></v-text-field>
        <v-btn
          id="btCadastrar"
          color="success"
          class="col-4"
          @click="criarTarefa"
        >Add
        </v-btn>
        <v-btn
          id="btAlterar"
          color="warning"
          class="col-4"
          hidden
          @click="alterarTarefa(this)"
        >Alterar
        </v-btn>
      </v-form>
    </v-row>
    <v-row >
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
              @click="btnEditarTarefa(item)"
          >mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="btnDeleteItem(item)"
          >mdi-delete
          </v-icon>
      </template>
      </v-data-table> 
    </v-row>
  </v-container>
</template>


<script>
  var inpTarefa = "";
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState(['lista'])
    },
    data: () => ({
      singleSelect: false,
      selected: [],
      editedIndex: -1,
      cabecalho: [
        { text: 'Lista', align: 'start', value: 'nome' },
        { text: 'Ações', align: 'end', value: 'actions' }
      ],
     
      inpTarefa: inpTarefa,
      itemM:{},
    }),

    methods:{
      criarTarefa(){
        var input = document.getElementById("inputTarefa");
        if(validaInput(input)){
          this.lista.push({
            id: this.lista.length,
            nome: input.value,
            concluida: false,
          })
          this.inpTarefa = "";
        }
      },

      btnDeleteItem(item) {
        this.lista.splice(this.lista.indexOf(item),1);

      },

      btnEditarTarefa(item) {
        this.inpTarefa = item.nome;
        document.getElementById("btCadastrar").hidden = true;
        document.getElementById("btAlterar").hidden = false;
        this.itemM = item;
      },

      alterarTarefa(){
        var input = document.getElementById("inputTarefa");
        if(validaInput(input)){
          this.lista[this.itemM.id].nome = input.value;
          document.getElementById("btCadastrar").hidden = false;
          document.getElementById("btAlterar").hidden = true;
          this.itemM="";
          this.inpTarefa="";
        }
      },
      
    }
  }
  function validaInput(input){
    if(input.value.length < 3){
      alert ("Preencha o campo corretamente");
      return false;
    }
    return true;
  }
</script>
