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
        <div v-for="product in state.products" :key="product.id">
            <div class="card-top">
                <img :src="'https://image.tmdb.org/t/p/w342' + product.poster_path" alt="">
            </div>
            <div class="card-intestation d-flex">
                <p>Titolo: {{ product.title }} </p>
                <p>Titolo Originale: {{ product.original_title }} </p>
                <!-- <span v-show="movie.original_language in state.flags">Lingua originale: {{ movie.original_language }} /</span> -->
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

    & card {
        border: 1px solid white;
        max-width: 342px;
        padding-bottom: 1rem;
    }

    .card-intestation {
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
        text-align: center;
    }

    .flags {
        width: 100px;
        height: 30px;
    }

    .fa-star {
        color: goldenrod;
    }
}
</style>
