<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state: state,
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
    <input type="search" name="" id="" placeholder="cerca il tuo film o serie tv">
    <button @click="state.callApi()">Vai</button>
  </header>

  <main>
    <ul>
      <li v-for="movie in state.movies">{{ movie.original_title }}</li>
      <!-- momentaneamente inutile, impostiamo struttura per vedere i cambiamenti in pagina -->
    </ul>
  </main>


</template>

<style></style>
