const app = new Vue({
  el: '.app',
  data: {
    search: '',
    listaPost: [],
  },
  methods:{
    carrega(url){
      fetch(url)
      .then(dados=>dados.json())
      .then(dados=>{
        window.console.log(dados.articles)
        dados.articles.forEach(element => {
          this.listaPost.push(element)
        });
        
      })
    }
  },
  computed: {
    lista(){
      return this.listaPost.filter((postagem)=>{
        let titulo = postagem.title.toUpperCase();
        let q = this.search.toUpperCase();
        return titulo.match(q);
      })
    }
  },
  created(){
    // us , ar , ....
    this.carrega('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=0dfc1d53c99b4014a2e3f09221edaccd');
    this.carrega('https://newsapi.org/v2/top-headlines?country=ar&pageSize=5&apiKey=0dfc1d53c99b4014a2e3f09221edaccd');
    this.carrega('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=0dfc1d53c99b4014a2e3f09221edaccd');
    this.carrega('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=0dfc1d53c99b4014a2e3f09221edaccd');
  }
})