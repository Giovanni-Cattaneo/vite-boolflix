<script>
import { state } from '../state';

export default {
    name: 'appCarousel',
    data() {
        return {
            state,
            activeImage: 0,
            groupItems: 5,

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
                    "poster_path": "../../public/avatar_wallpaper.jpg",
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
                    "poster_path": "../../public/avengers.jpg",
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
                    "poster_path": "../../public/justice_league.jpg",
                    "release_date": "1990-05-25",
                    "title": "Ritorno al futuro - Parte III",
                    "video": false,
                    "vote_average": 7.47,
                    "vote_count": 10068
                },
                {
                    "adult": false,
                    "backdrop_path": "/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 120,
                    "original_language": "en",
                    "original_title": "The Lord of the Rings: The Fellowship of the Ring",
                    "overview": "Bilbo Baggins ha deciso di celebrare il suo centoundicesimo compleanno in maniera molto particolare;alla fine della festa, abbandona parenti, amici, conoscenti e il suo affezionato nipote Frodo, cui lascia ogni cosa. Lo stregone Gandalf insiste perché lo hobbit lasci a Frodo anche il suo anello magico, su cui intende tenere un occhio vigile e fare alcune ricerche, perché potrebbe celare un mistero più inquietante di quanto non sembri. E così è; quello di Bilbo è l'Unico Anello, l'Anello per domarli, il cuore del potere del malefico Signore Oscuro Sauron, che sta tornando a tessere le sue trame di conquista e distruzione. Per impedirgli di vedere realizzato il suo sanguinoso disegno, l'anello dovrà essere distrutto, cosa possibile soltanto nella fornace di Monte Fato, dove Sauron, secoli prima, lo forgiò.",
                    "popularity": 147.99,
                    "poster_path": "../../public/man_of_steel.jpg",
                    "release_date": "2001-12-18",
                    "title": "Il Signore degli Anelli - La compagnia dell'anello",
                    "video": false,
                    "vote_average": 8.411,
                    "vote_count": 24170
                },
                {
                    "adult": false,
                    "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 122,
                    "original_language": "en",
                    "original_title": "The Lord of the Rings: The Return of the King",
                    "overview": "Le forze di Sauron hanno attaccato la capitale di Gondor, Minas Tirith, nel suo assedio finale contro l'umanità. Tenuto da un debole sovrintendente, quello che una volta era un fastoso regno non ha mai avuto così bisogno del proprio re. Mentre Gandalf tenta disperatamente di spingere lo smembrato esercito di Gondor ad agire, Thèoden si unisce ai guerrieri di Rohan per combattere assieme a loro. Pieno di coraggio e di appassionata lealtà, l'esercito degli umani non riesce però a tener testa alle numerosissime legioni nemiche che giungono su tutto il regno. Ogni vittoria è accompagnata da un grande sacrificio. Malgrado le numerose perdite, la Compagnia si lancia verso la più grande battaglia mai affrontata, unita dall'unico scopo di riuscire a tenere Sauron distratto e dare a Frodo una occasione per portare a termine la sua spedizione...",
                    "popularity": 122.714,
                    "poster_path": "../../mission_impossibile.jpg",
                    "release_date": "2003-12-01",
                    "title": "Il Signore degli Anelli - Il ritorno del re",
                    "video": false,
                    "vote_average": 8.479,
                    "vote_count": 23230
                },
                {
                    "adult": false,
                    "backdrop_path": "/6G73mNyooWAEQTpckPSnFxFoNmc.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 121,
                    "original_language": "en",
                    "original_title": "The Lord of the Rings: The Two Towers",
                    "overview": "La Compagnia dell'Anello è divisa, e ogni speranza è riposta ora in Frodo e Sam, che stanno tentando di attraversare non visti i confini di Mordor, tallonati dall'infido Gollum: Aragorn, Gimli e Legolas sono invece sulle tracce di Merry e Pipino, rapiti dagli Uruk-Hai di Saruman e in grave pericolo di vita. Attraverso alterne vicende, raggiungeranno la terra di Rohan e aiuteranno il Re Theoden nella sua guerra contro il traditore Saruman...",
                    "popularity": 107.755,
                    "poster_path": "../../public/ready_player_one.jpg",
                    "release_date": "2002-12-18",
                    "title": "Il Signore degli Anelli - Le due torri",
                    "video": false,
                    "vote_average": 8.394,
                    "vote_count": 21003
                },
                {
                    "adult": false,
                    "backdrop_path": "/6G73mNyooWAEQTpckPSnFxFoNmc.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 121,
                    "original_language": "en",
                    "original_title": "The Lord of the Rings: The Two Towers",
                    "overview": "La Compagnia dell'Anello è divisa, e ogni speranza è riposta ora in Frodo e Sam, che stanno tentando di attraversare non visti i confini di Mordor, tallonati dall'infido Gollum: Aragorn, Gimli e Legolas sono invece sulle tracce di Merry e Pipino, rapiti dagli Uruk-Hai di Saruman e in grave pericolo di vita. Attraverso alterne vicende, raggiungeranno la terra di Rohan e aiuteranno il Re Theoden nella sua guerra contro il traditore Saruman...",
                    "popularity": 107.755,
                    "poster_path": "../../public/the_batman.jpg",
                    "release_date": "2002-12-18",
                    "title": "Il Signore degli Anelli - Le due torri",
                    "video": false,
                    "vote_average": 8.394,
                    "vote_count": 21003
                },
                {
                    "adult": false,
                    "backdrop_path": "/6G73mNyooWAEQTpckPSnFxFoNmc.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 121,
                    "original_language": "en",
                    "original_title": "The Lord of the Rings: The Two Towers",
                    "overview": "La Compagnia dell'Anello è divisa, e ogni speranza è riposta ora in Frodo e Sam, che stanno tentando di attraversare non visti i confini di Mordor, tallonati dall'infido Gollum: Aragorn, Gimli e Legolas sono invece sulle tracce di Merry e Pipino, rapiti dagli Uruk-Hai di Saruman e in grave pericolo di vita. Attraverso alterne vicende, raggiungeranno la terra di Rohan e aiuteranno il Re Theoden nella sua guerra contro il traditore Saruman...",
                    "popularity": 107.755,
                    "poster_path": "../../public/venom.jpg",
                    "release_date": "2002-12-18",
                    "title": "Il Signore degli Anelli - Le due torri",
                    "video": false,
                    "vote_average": 8.394,
                    "vote_count": 21003
                },
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
    <h2>Ecco gli ultimi tittoli aggiunti:</h2>
    <div class="carousel d-flex">
        <button class="prev" @click="prev"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="next"><i class="fa-solid fa-chevron-right"></i></button>
        <!-- <div class="slider d-flex" tabindex="0">
            <div v-for="(carousel, index) in carouselProducts" v-bind:key="index">
                <img :src="'https://image.tmdb.org/t/p/w342' + carousel.poster_path" alt="">
            </div>
        </div> -->
        <div class="card d-flex" v-show="index === activeImage" v-for="(carousel, index) in carouselProducts "
            :key="index">
            <div class="card-top">
                <img :src="carousel.poster_path" alt="">
            </div>
            <div class="card-detail">
                <p>Titolo: {{ carousel.title }} </p>
                <p>Titolo Originale: {{ carousel.original_title }} </p>
                <span v-if="carousel.original_language in state.flags">
                    <img class="flags" v-bind:src="state.flags[carousel.original_language]" alt="">
                </span>
                <p v-else> Lingua originale: {{ carousel.original_language }}</p>
                <div class="star-container">
                    <span v-for="n in Math.ceil(carousel.vote_average / 2)" :key="n">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in 5 - Math.ceil(carousel.vote_average / 2)">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
                <p>{{ carousel.overview }}</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.carousel {
    text-align: center;
    justify-content: center;
    margin-bottom: 3rem;


    & h2 {
        margin-bottom: 1rem;
    }
}

.card {
    position: relative;
    flex-direction: row;
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

.card-top {

    & img {
        width: 85%;
    }
}

.flags {
    width: 100px;
    height: 30px;
}

.card:hover .card-detail {
    display: flex;
}

.fa-star {
    color: goldenrod;
}

.prev {
    position: absolute;
    left: 0.5rem;
    top: 25rem;
    font-size: 2rem;
    padding: 0.5rem;
    background-color: rgba(78, 78, 78, 0.445);
    border: none;
    z-index: 10;
}

.next {
    position: absolute;
    right: 0.5rem;
    top: 25rem;
    font-size: 2rem;
    padding: 0.5rem;
    background-color: rgba(78, 78, 78, 0.445);
    border: none;
    z-index: 10;
}

.slider {
    justify-content: center;
}
</style>
