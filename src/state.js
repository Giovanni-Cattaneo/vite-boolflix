import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    message: "this is a test for boolflix",
    movies: [],
    api_movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=4c286d2dce5da2b32592ae9e96dd9f32&query=',
    callApi() {
        axios.get(this.api_movie_url).then(response => {
            console.log(response)
            this.movies = response.data.results
        })
    },
})