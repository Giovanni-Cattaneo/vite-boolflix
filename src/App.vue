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

      state.api_movie_url = `https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=${state.searchProducts.split(' ').join('+')}`
      state.api_tv_series_url = `https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=${state.searchProducts.split(' ').join('+')}`

      state.callProductsApi()

      state.searchProducts = ""
    },

    findFlags() {
      if (state.products.original_language in state.flags) {
        //qui dobbiamo mettere che se la key della lingua è compresa nelle flags dobbiamo restituire l'imkmagine invece della stringa
        return state.flags
      } else {
        return state.products.original_language
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
    <input type="search" name="" id="" placeholder="cerca il tuo film o serie tv" v-model="state.searchProducts"
      @keyup.enter="search()">
    <button @click="search()">Vai</button>
  </header>

  <main>
    <ul v-if="state.products.length > 0">
      <li v-for="product in state.products" :key="product.id">
        <img :src="'https://image.tmdb.org/t/p/w342' + product.poster_path" alt="">
        <p>Titolo: {{ product.title }} </p>
        <p>Titolo Originale: {{ product.original_title }} </p>
        <!-- <span v-show="movie.original_language in state.flags">Lingua originale: {{ movie.original_language }} /</span> -->
        <p v-if="product.original_language in state.flags">
          <img class="flags" v-bind:src="state.flags[product.original_language]" alt="">
        </p>
        <p v-else> Lingua originale: {{ product.original_language }}/</p>
        <p>Valutazione: {{ Math.ceil(product.vote_average / 2).toFixed(0) }}</p>
      </li>
      <!-- momentaneamente inutile, impostiamo struttura per vedere i cambiamenti in pagina -->
    </ul>
  </main>


</template>

<style>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.flags {
  width: 50px;
  height: 30px;
}
</style>
