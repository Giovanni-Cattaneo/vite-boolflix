<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state: state,
    }
  },
  methods: {
    search() {
      const searchSingleMovie = state.searchMovie.split(' ') // con questo dividiamo il testo, mettendo la divisione con spazio non dividiamo in singole lettere

      const searchText = searchSingleMovie.join('+')

      state.api_movie_url = `https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=${searchText}`
      state.callApi()

      console.log(state.movies)

      state.searchMovie = ""
    }
  },

  mounted() {
    //state.callApi() facciamo la chiamata api al caricamento della pagina per ora
  }
}


</script>

<template>
  <header>
    <h1>{{ state.message }}</h1>
    <input type="search" name="" id="" placeholder="cerca il tuo film o serie tv" v-model="state.searchMovie"
      @keyup.enter="search()">
    <button @click="search()">Vai</button>
  </header>

  <main>
    <ul>
      <li v-for="movie in state.movies">
        Titolo: {{ movie.title }} -
        Titolo Originale: {{ movie.original_title }} -
        Lingua originale: {{ movie.original_language }} -
        Valutazione: {{ movie.popularity }}
      </li>
      <!-- momentaneamente inutile, impostiamo struttura per vedere i cambiamenti in pagina -->
    </ul>
  </main>


</template>

<style>
ul {
  list-style: none;
}
</style>
