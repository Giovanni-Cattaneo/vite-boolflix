<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state: state,
    }
  }
}

console.log(state.movies)

</script>

<template>
  <h1>ecco il tuo messaggio: {{ state.message }}</h1>
</template>

<style></style>
