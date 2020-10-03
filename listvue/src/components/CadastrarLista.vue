<template>
  <v-container>
    <v-row class="text-center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="col-12"
      >
        <v-text-field
          v-model="teste"
          id="inputTarefa"
          class="col-4"
          label="Tarefa..."
          clearable
          :rules="rules"
          clear-icon="mdi-close-circle"
          autocomplete="off"
        ></v-text-field>
        <v-btn
          color="success"
          class="col-4"
          @click="criarTarefa"
        >Add
        </v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState(['lista'])
    },
    data: () => ({
       rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
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
          this.$refs.form.reset()
        }
      },

      editarTarefa(item){
        var input = document.getElementById("inputTarefa");
        if(validaInput(input)){
          this.lista.indexOf(item.id).nome = input.value;
        }
      },
    }
  }
  function validaInput(input){
    if((input.value.length < 3) || (input.value.length == 0)){
      alert ("Preencha o campo corretamente");
      return false;
    }
    return true;
  }
</script>
