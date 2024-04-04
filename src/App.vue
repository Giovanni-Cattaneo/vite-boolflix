<script>
import { state } from './state.js'
import appCard from "./components/appCard.vue";
import appHeader from "./components/appHeader.vue"

export default {
  components: {
    appCard,
    appHeader
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
  <appHeader />

  <main>
    <appCard />
  </main>


</template>

<style></style>
