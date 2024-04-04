<script>
import { state } from './state.js'
import appCard from "./components/appCard.vue";

export default {
  components: {
    appCard
  },
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
    },
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
    <appCard />
  </main>


</template>

<style></style>
