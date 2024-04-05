<script>
import { state } from '../state';

export default {
    name: 'appCarousel',
    data() {
        return {
            state,
            activeImage: 0,
            carouselProducts: [
                {
                    "adult": false,
                    "backdrop_path": "/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg",
                    "genre_ids": [
                        12,
                        35,
                        878
                    ],
                    "id": 105,
                    "original_language": "en",
                    "original_title": "Back to the Future",
                    "overview": "Marty McFly è stato catapultato per errore nel 1955, grazie alla macchina del tempo ideata dal suo amico scienziato Doc. Non avendo più \"carburante\" per poter tornare nel futuro si rivolge alla versione più giovane di Doc, che nonostante l'incredulità iniziale si farà in quattro per aiutarlo. Ma nel 1955 non è solo Doc ad essere più giovane, Marty infatti si imbatte casualmente nei suoi genitori, all'epoca teenager, ma l'incontro aggiungerà altri problemi.",
                    "popularity": 100.149,
                    "poster_path": "/AkmUoSHkxW9txpzZ52gCcWweEkE.jpg",
                    "release_date": "1985-07-03",
                    "title": "Ritorno al futuro",
                    "video": false,
                    "vote_average": 8.3,
                    "vote_count": 19156
                },
                {
                    "adult": false,
                    "backdrop_path": "/skQN2UMQKQnOTmwplcYMx6ZF4jS.jpg",
                    "genre_ids": [
                        12,
                        35,
                        878
                    ],
                    "id": 165,
                    "original_language": "en",
                    "original_title": "Back to the Future Part II",
                    "overview": "Il film comincia dove terminava il primo capitolo, ovvero con Marty e Jennifer che partono insieme allo scienziato Doc, inventore della macchina del tempo, per il 2015 allo scopo di evitare che il futuro dei loro figli possa essere in pericolo. Ma la situazione precipita e ad essere in pericolo non è più il futuro, ma il passato. Marty dovrà tornare nuovamente nel 1955 e...",
                    "popularity": 86.178,
                    "poster_path": "/y86WZGmsiKHZ0HmH1NZRx2iOaP4.jpg",
                    "release_date": "1989-11-22",
                    "title": "Ritorno al futuro - Parte II",
                    "video": false,
                    "vote_average": 7.76,
                    "vote_count": 12279
                },
                {
                    "adult": false,
                    "backdrop_path": "/vKp3NvqBkcjHkCHSGi6EbcP7g4J.jpg",
                    "genre_ids": [
                        12,
                        35,
                        878
                    ],
                    "id": 196,
                    "original_language": "en",
                    "original_title": "Back to the Future Part III",
                    "overview": "Per questa terza, conclusiva, puntata della trilogia, Marty McFly è costretto a tornare indietro nel tempo fino al 1885 per salvare Doc, che vi era stato catapultato al termine del secondo capitolo. Questa volta tornare nel futuro sarà ancora più difficile.",
                    "popularity": 47.786,
                    "poster_path": "/fR29F37jN4y1xapDAcjI9CEgM65.jpg",
                    "release_date": "1990-05-25",
                    "title": "Ritorno al futuro - Parte III",
                    "video": false,
                    "vote_average": 7.47,
                    "vote_count": 10068
                },
                {
                    "adult": false,
                    "backdrop_path": "/myoUeMqGXmsji0YLQB6vPw7llLm.jpg",
                    "genre_ids": [
                        99
                    ],
                    "id": 373801,
                    "original_language": "en",
                    "original_title": "Back to the Present: The Special",
                    "overview": "\"Ritorno al futuro\" di Steven Spielberg è stato un enorme successo al botteghino nel 1985 che alla fine ha portato a due sequel. Nel 1989, in \"Ritorno al futuro - Parte II\", Michael J. Fox aka Marty Mc Fly e Christopher Lloyd aka DOC, viaggiano nel futuro fino al 21 ottobre 2015. All'epoca, le folli invenzioni del film sembravano tutt'altro che realizzabili, ma non sapevamo che sarebbero state così vicine alla realtà!",
                    "popularity": 4.415,
                    "poster_path": "/41A2syHG6khv7Ij0xmw5OzyRhmQ.jpg",
                    "release_date": "2015-10-18",
                    "title": "Ritorno al futuro - 30 anni dopo",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 14
                },
                {
                    "adult": false,
                    "backdrop_path": "/jA09e9RryWU4zKOTxTDKVbnFHlE.jpg",
                    "genre_ids": [
                        99
                    ],
                    "id": 244214,
                    "original_language": "en",
                    "original_title": "Star Trek: Secrets of the Universe",
                    "overview": "È possibile costruire la nostra nave stellare Enterprise? Viaggeremo mai tra le stelle così facilmente come in Star Trek? Il nuovo film di J.J. Abrams, \"Star Trek - Into Darkness\", arriva sullo schermo in un'età d'oro di scoperte scientifiche.  HISTORY è lì, e offre agli spettatori uno sguardo profondo del dietro le quinte, sul set e nella scienza: nuovi incredibili esopianeti, la fisica del motore Warp e le idee dietro come potremmo un giorno vivere in un universo di Star Trek.",
                    "popularity": 1.032,
                    "poster_path": "/4qLv4R3eaTpzL8tbRwRGFzUzIzY.jpg",
                    "release_date": "2013-05-16",
                    "title": "Star Trek - Ritorno al futuro",
                    "video": false,
                    "vote_average": 6.2,
                    "vote_count": 4
                },
                {
                    "adult": false,
                    "backdrop_path": "/scNssnn5PN99fBODNzxF5qN4Iw8.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        28,
                        878
                    ],
                    "id": 16234,
                    "original_language": "en",
                    "original_title": "Batman Beyond: Return of the Joker",
                    "overview": "Gotham City, 2039: il Joker, capo della gang di strada dei Jokerz, annuncia il suo ritorno, dopo aver rubato armi ad alta tecnologia alle imprese Wayne. Dietro la maschera di Batman c'è il giovane Terry McGinnis, adolescente dal passato turbolento, divenuto pupillo di un Bruce Wayne troppo vecchio e malato per combattere il crimine. Terry conosce Bruce salvandogli la vita nella rapina compiuta dai Jokerz e, in seguito, prende il suo posto mettendosi sulle tracce del nemico storico...",
                    "popularity": 23.544,
                    "poster_path": "/oNFZW1JD5q8uj8UL5Vap8ei53WN.jpg",
                    "release_date": "2000-12-12",
                    "title": "Batman of the Future - Il ritorno del Joker",
                    "video": false,
                    "vote_average": 7.294,
                    "vote_count": 1062
                }
            ],
        }
    },
    methods: {
        prev() {
            console.log("prev")
            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.carouselProducts.length - 1
                console.log(this.activeImage);
            }
        },

        next() {
            console.log("next")
            this.activeImage++
            if (this.activeImage >= this.carouselProducts.length) {
                this.activeImage = 0
                console.log(this.activeImage);
            }
        }
    }
}
</script>

<template>
    <div class="carousel">
        <button class="prev" @click="prev"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="next"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="slider" tabindex="0">
            <div v-for="(carousel, index) in carouselProducts" v-bind:key="index" v-show="index === activeImage">
                <img :src="'https://image.tmdb.org/t/p/w500' + carousel.poster_path" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.prev,
.next {
    position: absolute;
}
</style>
