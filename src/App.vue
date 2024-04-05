<script>
import { state } from './state.js'
import appCard from "./components/appCard.vue";
import appHeader from "./components/appHeader.vue"
import appCarousel from './components/appCarousel.vue';

export default {
  components: {
    appCard,
    appHeader,
    appCarousel
  },
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
    <appHeader />
  </header>


  <main>
    <appCarousel />
    <appCard />
  </main>


</template>

<style></style>
