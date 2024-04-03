import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    message: "Welcome to Boolflix",
    movies: [],
    searchMovie: "",
    api_movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&language=it-IT&query=',
    callApi() {
        axios.get(this.api_movie_url).then(response => {
            //console.log(response)
            this.movies = response.data.results
        })
    },
})