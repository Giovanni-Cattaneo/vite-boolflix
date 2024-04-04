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
    <div class="container" v-if="state.products.length > 0">
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
            </div>

        </div>
    </div>
    <span v-else>Spiacente non ci sono titoli corrispondenti alla tua richiesta</span>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .card {
        border: 0.5px solid white;
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
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.555);
        z-index: 1;
        color: antiquewhite;
    }

    .card-detail:hover {
        display: block;
    }

    .fa-star {
        color: goldenrod;
    }
}
</style>
