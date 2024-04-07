<script>
import { state } from '../state';

export default {
    name: 'appCard',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="product in state.products" :key="product.id">
            <div class="card-top">
                <img :src="'https://image.tmdb.org/t/p/w342' + product.poster_path" alt="">
            </div>
            <div class="card-detail">
                <p>Titolo: {{ product.title }} </p>
                <p>Titolo Originale: {{ product.original_title }} </p>
                <span v-if="product.original_language in state.flags">
                    <img class="flags" v-bind:src="state.flags[product.original_language]" alt="">
                </span>
                <p v-else> Lingua originale: {{ product.original_language }}</p>
                <div class="star-container">
                    <span v-for="n in Math.ceil(product.vote_average / 2)" :key="n">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in 5 - Math.ceil(product.vote_average / 2)">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
                <p>{{ product.overview }}</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: center;

    .card {
        border: 0.5px solid white;
        position: relative;
    }

    .card-top {
        height: 100%;

        & img {
            height: 100%;
            width: 342px
        }
    }

    .flags {
        width: 100px;
        height: 30px;
    }

    .card-detail {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.911);
        z-index: 1;
        color: antiquewhite;
        flex-direction: column;
        gap: 1rem;
        display: none;
        transition: opacity 0.5s;
        overflow-y: auto;
        text-align: center;
        padding-top: 3rem;

    }

    .card:hover .card-detail {
        display: flex;
    }

    .fa-star {
        color: goldenrod;
    }
}
</style>
