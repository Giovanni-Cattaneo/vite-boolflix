<script>
import { state } from '../state';

export default {
    name: 'appHeader',
    data() {
        return {
            state
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
}
</script>

<template>
    <header>
        <div class="d-flex">
            <img class="logo" src="../../public/letter_red.png" alt="">
            <h2>{{ state.message }}</h2>
        </div>

        <div class="inputs d-flex">
            <input type="search" name="" id="" placeholder="cerca il tuo film o serie tv" v-model="state.searchProducts"
                @keyup.enter="search()">
            <button @click="search()">Vai</button>
        </div>
    </header>
</template>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    max-width: 1920px;
    margin: auto;
    padding: 0.3rem 2rem;
    position: fixed;
    width: 100%;
    z-index: 10;


    .inputs {
        gap: 0.8rem;
    }

    & h2 {
        color: rgb(207, 0, 0);
        font-size: 2rem;
        align-self: center;
    }

    & button {
        padding: 0.3rem 1rem;
    }

    .logo {
        width: 100px;
        margin-right: 0.4rem;
        height: 100px;
    }
}
</style>
