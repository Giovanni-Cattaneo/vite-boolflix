<script>
import { state } from './state.js'
import appCard from "./components/appCard.vue";
import appHeader from "./components/appHeader.vue"
import appCarousel from './components/appCarousel.vue';
import appCarouselMovie from './components/appCarouselMovie.vue';
import appCarouselTv from './components/appCarouselTv.vue';

export default {
  components: {
    appCard,
    appHeader,
    appCarousel,
    appCarouselMovie,
    appCarouselTv

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
    <appCarousel v-if="state.visible" />
    <appCard />
    <appCarouselMovie v-if="state.visible" />
    <appCarouselTv v-if="state.visible" />
  </main>


</template>

<style></style>
