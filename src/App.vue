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
      this.findFlags()
      const searchSingleMovie = state.searchMovie.split(' ') // con questo dividiamo il testo, mettendo la divisione con spazio non dividiamo in singole lettere

      const searchText = searchSingleMovie.join('+') //riuniamo le parole con un separatore + perchè sia acettato dall'api url

      state.api_movie_url = `https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=${searchText}`
      state.callApi()

      console.log(state.movies)

      state.searchMovie = ""
    },

    findFlags() {
      if (state.movies.original_language in state.flags) {
        //qui dobbiamo mettere che se la key della lingua è compresa nelle flags dobbiamo restituire l'imkmagine invece della stringa
        return state.flags
      } else {
        return state.movies.original_language
      }
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
      <li v-for="movie in state.movies" :key="movie.id">
        <span>Titolo: {{ movie.title }} /</span>
        <span>Titolo Originale: {{ movie.original_title }} /</span>
        <!-- <span v-show="movie.original_language in state.flags">Lingua originale: {{ movie.original_language }} /</span> -->
        <span v-if="movie.original_language in state.flags">
          <img v-bind:src="state.flags[movie.original_language]" alt="">/
        </span>
        <span v-else> Lingua originale: {{ movie.original_language }}/</span>
        <span>Valutazione: {{ movie.popularity }}</span>
      </li>
      <!-- momentaneamente inutile, impostiamo struttura per vedere i cambiamenti in pagina -->
    </ul>
  </main>


</template>

<style>
ul {
  list-style: none;
}

img {
  width: 50px;
  height: 30px;
}
</style>
