<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state: state,
    }
  },
  mounted() {
    state.callApi() // facciamo la chiamata api al caricamento della pagina per ora
  }
}


</script>

<template>
  <h1>ecco il tuo messaggio: {{ state.message }}</h1>
  <ul>
    <li v-for="movie in state.movies">{{ movie.original_title }}</li>
    <!-- momentaneamente inutile, impostiamo struttura per vedere i cambiamenti in pagina -->
  </ul>
</template>

<style></style>
