import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    message: "Welcome to Boolflix",
    movies: '',
    tvSeries: '',
    products: '',
    flags: {
        en: '../public/flags/1x1/us.svg',
        it: '../public/flags/1x1/it.svg',
        fr: '../public/flags/1x1/fr.svg',
        de: '../public/flags/1x1/de.svg',
        ja: '../public/flags/1x1/jp.svg',
    },
    searchProducts: "",
    api_movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=',
    api_tv_series_url: 'https://api.themoviedb.org/3/search/tv?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=',
    callProductsApi() {
        axios.get(this.api_movie_url).then(response1 => {
            //console.log(response)
            this.movies = response1.data.results
        })

        axios.get(this.api_tv_series_url).then(response2 => {
            //console.log(response)
            this.tvSeries = response2.data.results
        })
        this.products = this.movies.concat(this.tvSeries)
    },
})