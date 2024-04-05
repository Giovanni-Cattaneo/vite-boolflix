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
            <div class="categories d-flex">
                <a href="">Home</a>
                <a href="">Serie Tv</a>
                <a href="">Film</a>
                <a href="">Originali</a>
                <a href="">Aggiunti di recente</a>
                <a href="">La mia lista</a>
            </div>
        </div>



        <div class="inputs d-flex">
            <input type="search" name="" id="" placeholder="cerca il tuo film o serie tv" v-model="state.searchProducts"
                @keyup.enter="search()">
            <i class="fa-solid fa-bell"></i>
            <div class="account d-flex">
                <img src="../../public/netflix-profile-pictures.jpg" alt="">
                <i class="fa-solid fa-chevron-down"></i>
            </div>

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

    .categories {
        gap: 0.5rem;
        align-items: center;
        margin-left: 1rem;
    }

    & a {
        color: inherit;
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    }


    .inputs {
        gap: 0.8rem;
        align-items: center;

        & img {
            width: 40px;
        }
    }

    .account {
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
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
        margin-right: 1rem;
        height: 80px;
        width: 80px;
    }
}
</style>
