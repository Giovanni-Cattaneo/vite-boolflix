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
            state.visible = false
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
            <div class="search-wrapper">
                <input type="search" name="" id="" placeholder="cerca il tuo film o serie tv"
                    v-model="state.searchProducts" @keyup.enter="search()">
                <button id="search"> <i class="fa-solid fa-magnifying-glass"></i> </button>
            </div>
            <a href="">Bambini</a>
            <i class="fa-solid fa-bell"></i>
            <div class="account d-flex">
                <img src="../../public/netflix-profile-pictures.jpg" alt="">
                <i class="fa-solid fa-chevron-down"></i>
                <div class="account-list d-flex">
                    <div class="single-avatar d-flex">
                        <img src="../../public/green-smile.png" alt="">
                        <span>Papà</span>
                    </div>
                    <div class="single-avatar d-flex">
                        <img src="../../public/laugh-woman.jpg" alt="">
                        <span>Mamma</span>
                    </div>
                    <div class="single-avatar d-flex">
                        <img src="../../public/penguin.png" alt="">
                        <span>Kids</span>
                    </div>
                    <div class="single-avatar d-flex">
                        <img src="../../public/chicken.png" alt="">
                        <span>Giovanni</span>
                    </div>

                </div>
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
    z-index: 1000;

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
        gap: 0.65rem;
        align-items: center;

        & img {
            width: 40px;
        }

        #search {
            border: none;
            background-color: black;
            cursor: pointer;
            font-size: 1.3rem;
        }
    }

    .account {
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        position: relative;

        .account-list {
            display: none;
            position: absolute;
            top: 4rem;
            flex-direction: column;
            border: 0.1px solid white;
            padding: 1rem;
            gap: 0.5rem;
            right: 0;
            background-color: black;
        }
    }

    .account:hover .account-list {
        display: flex;
    }

    .single-avatar {
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
