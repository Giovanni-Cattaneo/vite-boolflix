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
    <ul v-if="state.products.length > 0">
        <li v-for="product in state.products" :key="product.id">
            <img :src="'https://image.tmdb.org/t/p/w342' + product.poster_path" alt="">
            <p>Titolo: {{ product.title }} </p>
            <p>Titolo Originale: {{ product.original_title }} </p>
            <!-- <span v-show="movie.original_language in state.flags">Lingua originale: {{ movie.original_language }} /</span> -->
            <p v-if="product.original_language in state.flags">
                <img class="flags" v-bind:src="state.flags[product.original_language]" alt="">
            </p>
            <p v-else> Lingua originale: {{ product.original_language }}</p>
            <p>Valutazione: {{ Math.ceil(product.vote_average / 2) }} stelle</p>
            <p>{{ Math.ceil(product.vote_average / 2).length }}</p>
            <span v-for="n in Math.ceil(product.vote_average / 2)" :key="n">
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-for="n in 5 - Math.ceil(product.vote_average / 2)">
                <i class="fa-regular fa-star"></i>
            </span>
        </li>
        <!-- momentaneamente inutile, impostiamo struttura per vedere i cambiamenti in pagina -->
    </ul>
    <span v-else>Spiacente non ci sono titoli corrispondenti alla tua richiesta</span>
</template>

<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    & li {
        border: 1px solid white;
        max-width: 342px;
        padding-bottom: 1rem;
    }
}

.flags {
    width: 50px;
    height: 30px;
}

.fa-star {
    color: goldenrod;
}
</style>
