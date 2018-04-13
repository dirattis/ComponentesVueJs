<template>
  <div id="app">
    <app-table :heads="colunas" :rows="items" 
    :totalRows="dados.length" class="tableMain" @paginarLista="paginar" :perPage="perPage"></app-table>

  </div>
</template>

<script>
const porPagina = 2;

export default {
  name: 'app',
  data () {
    return {
      colunas: ['Idade', 'Sobrenome', 'Nome'],
      items:[],
      dados:[],
      perPage: porPagina   
    }
  },

  methods: {
    paginar(objPaginacao){
            
      let skip = ((objPaginacao.currentPage - 1) * objPaginacao.perPage);
      let take = skip + objPaginacao.perPage;
      this.items = this.dados.filter(function(d,i){ return i >= skip && i < take });
      
    }
  },

  created(){   
    
    this.dados = [{Nome: 'Diego', Sobrenome: 'Rattis', Idade: 29 }, 
                  {Nome: 'Domingas', Sobrenome: 'Rattis', Idade: 25 },
                  {Nome: 'João', Sobrenome: 'Mourinho', Idade: 40 }, 
                  {Nome: 'José', Sobrenome: 'Bezerra', Idade: 55 },
                  {Nome: 'Paulo', Sobrenome: 'Coelho', Idade: 35 }, 
                  {Nome: 'Bruno', Sobrenome: 'Silva', Idade: 25 },
                  {Nome: 'Alexandre', Sobrenome: 'Osada', Idade: 30 }, 
                  {Nome: 'Jéssica', Sobrenome: 'Rabelo', Idade: 20 },
                  {Nome: 'Larissa', Sobrenome: 'Fernandes', Idade: 24 }, 
                  {Nome: 'Murilo', Sobrenome: 'Benício', Idade: 42 }];

    this.items = this.dados.filter(function(d,i){ return i < porPagina});
   
  }
  
}
</script>

<style>

.tableMain table, .tableMain th, .tableMain td{
  border: 1px solid #38d818;
  margin-left: 10px
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
</style>
