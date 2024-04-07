<script>
import { state } from '../state';

export default {
    name: 'appCarouselTv',
    data() {
        return {
            state,
            groupItems: 6,
            currentIndex: 0,
            movieCarousel: [
                {
                    "adult": false,
                    "backdrop_path": "/yUOFocKDW7MCC5isx4FK8A68QFp.jpg",
                    "genre_ids": [
                        9648,
                        10759,
                        18
                    ],
                    "id": 4607,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Lost",
                    "overview": "48 persone sopravvivono ad un tremendo disastro aereo e si ritrovano dispersi su un'isola dell'Oceano Pacifico che sembra completamente disabitata. Ognuno di loro ha una sua storia, ognuno di loro nasconde dei segreti. Ma tutti quanti sono consapevoli che, se vogliono continuare a vivere, debbono collaborare, superare le avversità e le divisioni personali e sperare in un soccorso che potrebbe anche non arrivare mai. Il gruppo, mentre affronta l'inclemenza del tempo e l'ambiente ostile, scopre, con il passare del tempo, che anche l'isola nasconde dei segreti.",
                    "popularity": 388.032,
                    "poster_path": "/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg",
                    "first_air_date": "2004-09-22",
                    "name": "Lost",
                    "vote_average": 7.958,
                    "vote_count": 3932
                },
                {
                    "adult": false,
                    "backdrop_path": "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
                    "genre_ids": [
                        16,
                        10759,
                        10765
                    ],
                    "id": 246,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Avatar: The Last Airbender",
                    "overview": "I fratelli Katara e Sokka risvegliano il giovane Aang da un lungo sonno e scoprono che è un Avatar le cui arti marziali possono sconfiggere la malvagia Nazione del Fuoco.",
                    "popularity": 595.415,
                    "poster_path": "/l7pRUq999FxqT0SuwB22JLcBIZY.jpg",
                    "first_air_date": "2005-02-21",
                    "name": "Avatar - La leggenda di Aang",
                    "vote_average": 8.725,
                    "vote_count": 3852
                },
                {
                    "adult": false,
                    "backdrop_path": "/uCqXSfHymdbDMsFx8t0u0OPSuve.jpg",
                    "genre_ids": [
                        10759,
                        18,
                        10768
                    ],
                    "id": 63333,
                    "origin_country": [
                        "GB"
                    ],
                    "original_language": "en",
                    "original_name": "The Last Kingdom",
                    "overview": "Mentre Alfred il Grande difende il suo regno dagli invasori scandinavi, Uhtred, nato sassone ma allevato dai vichinghi, rivendica il suo diritto di nascita.",
                    "popularity": 466.653,
                    "poster_path": "/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
                    "first_air_date": "2015-10-10",
                    "name": "The Last Kingdom",
                    "vote_average": 8.267,
                    "vote_count": 1622
                },
                {
                    "adult": false,
                    "backdrop_path": "/Aj3hb13leEgC4lmU4YwRC4NaBsk.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 4556,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Scrubs",
                    "overview": "John Dorian, conosciuto come JD, è un vero mattacchione. Lui, così come i suoi migliori amici Turk ed Elliot, sta cercando di diventare un bravo dottore, questo grazie anche ai preziosi consigli del Dr. Cox e del Dr. Kelso, i quali spesso si prendono gioco di lui per il suo carattere particolarmente sensibile. Alle sue giornate strampalate si aggiungono l'infermiera Carla, innamorata di Turk, e l'inserviente, il quale non gli dà mai un attimo di pace.",
                    "popularity": 587.123,
                    "poster_path": "/bJBMnlKhqimEQmhaOVeYNWWHt2Y.jpg",
                    "first_air_date": "2001-10-02",
                    "name": "Scrubs - Medici ai primi ferri",
                    "vote_average": 8.028,
                    "vote_count": 1673
                },
                {
                    "adult": false,
                    "backdrop_path": "/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
                    "genre_ids": [
                        10765,
                        18,
                        10759
                    ],
                    "id": 1399,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Game of Thrones",
                    "overview": "Nell'immaginario mondo di Westeros, in un tempo dal sapore medievale, s'intrecciano le vicende di alcune casate che lottano per la supremazia: i Baratheon, i Lannister, gli Stark, i Targaryen sono solo alcune delle famiglie che, tra guerre manifeste e intrighi clandestini, in un interminabile rovescio di fortune e alleanze, cercano di trionfare sugli avversari e prendere possesso del Trono di Spade, simbolo del potere e del comando. Tratto dal ciclo di romanzi Cronache del ghiaccio e del fuoco di George R. R. Martin.",
                    "popularity": 3049.731,
                    "poster_path": "/qwGKZ0vy6o69aErE6cJ43L8DE2N.jpg",
                    "first_air_date": "2011-04-17",
                    "name": "Il Trono di Spade",
                    "vote_average": 8.447,
                    "vote_count": 22927
                },
                {
                    "adult": false,
                    "backdrop_path": "/r0vlzWX5OzC9bVSZru0PVk0QzXn.jpg",
                    "genre_ids": [
                        10759,
                        18,
                        10765
                    ],
                    "id": 60802,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Last Ship",
                    "overview": "Ispirata all’omonimo romanzo di William Brinkley, seguiamo le avventure del capitano Tom Chandler (Eric Dane), che è da qualche mese in missione nell’Artico, sull’incrociatore Nathan James della Marina. Con lui a bordo ci sono il comandante Mike Slattery (Adam Baldwin) e un nutrito equipaggio, a cui si sono aggiunti la dottoressa Rachel Scott (Rhona Mitra) e il suo collega Quincy Thopet (Sam Spruell), due paleomicrobiologi. I loro studi sugli uccelli sembrano attirare l’attenzione dei russi, che non esitano a fare fuoco sui malcapitati. Chandler scopre che la realtà è molto più complicata del previsto: ogni comunicazione con le alte sfere sembra impossibile, lo studio dei due dottori è su una forma particolarmente aggressiva di virus, che sembra stia decimando la popolazione, e la loro ricerca potrebbe essere l’ultima speranza per salvare quello che resta del mondo. Tom e i suoi uomini potrebbero essere tra i pochi sopravvissuti al virus. E non è che l’inizio.",
                    "popularity": 515.606,
                    "poster_path": "/hGLmNT7YEIZ9IZMZrG0qxx8hm4J.jpg",
                    "first_air_date": "2014-06-22",
                    "name": "The Last Ship",
                    "vote_average": 6.802,
                    "vote_count": 885
                },
                {
                    "adult": false,
                    "backdrop_path": "/o0TYvii1gab1ThmGFegpF4iyDwf.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1668,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Friends",
                    "overview": "Una delle commedie televisive più amate di sempre su un gruppo di sei amici trentenni, la trama si svolge prevalentemente in due appartamenti e un Coffee-Bar: Monica, Rachel, Phoebe, Chandler, Ross e Joey condividono sogni, amori, delusioni e speranze fra gag esilaranti e battute dal ritmo serratissimo.",
                    "popularity": 497.724,
                    "poster_path": "/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
                    "first_air_date": "1994-09-22",
                    "name": "Friends",
                    "vote_average": 8.441,
                    "vote_count": 7634
                },
                {
                    "adult": false,
                    "backdrop_path": "/5BMwFwNzSidVYArn561acqtktxv.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1100,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "How I Met Your Mother",
                    "overview": "Nell'anno 2030 Ted Mosby, un affermato architetto, inizia a raccontare ai suoi due figli gli eventi che, a partire da venticinque anni prima, lo hanno portato a conoscere quella che sarebbe diventata la sua futura moglie e loro madre. Ted inizia così a ricordare di quando, nel 2005, era soltanto un giovane single a New York, ancora alla ricerca dell'anima gemella. All'epoca viveva insieme ai suoi storici amici Marshall Eriksen e Lily Aldrin, una giovane coppia di innamorati, fidanzati dai tempi del college. La loro combriccola era completata da Barney Stinson, un ricco e impenitente donnaiolo conosciuto per caso. Ted inizia il suo racconto dal giorno in cui ha conosciuto Robin Scherbatsky, una ragazza canadese appena arrivata in città, reporter in una piccola emittente televisiva locale, che presto si unisce al loro gruppo e con la quale il giovane instaura un complicato rapporto di amicizia/amore.",
                    "popularity": 2419.497,
                    "poster_path": "/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg",
                    "first_air_date": "2005-09-19",
                    "name": "How I Met Your Mother",
                    "vote_average": 8.2,
                    "vote_count": 4672
                },
                {
                    "adult": false,
                    "backdrop_path": "/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
                    "genre_ids": [
                        18,
                        10765
                    ],
                    "id": 84958,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Loki",
                    "overview": "Il volubile cattivo Loki riprende il suo ruolo di Dio del male in seguito agli eventi di \"Avengers: Endgame\".",
                    "popularity": 581.424,
                    "poster_path": "/oJdVHUYrjdS2IqiNztVIP4GPB1p.jpg",
                    "first_air_date": "2021-06-09",
                    "name": "Loki",
                    "vote_average": 8.177,
                    "vote_count": 11209
                },
                {
                    "adult": false,
                    "backdrop_path": "/eKSTuYpgvRfOomqUpd89XAWEPiA.jpg",
                    "genre_ids": [
                        10765,
                        18,
                        10759
                    ],
                    "id": 94997,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "House of the Dragon",
                    "overview": "La serie prequel vede la dinastia Targaryen all'apice assoluto del suo potere, con più di 15 draghi sotto il loro giogo. La maggior parte degli imperi, che siano reali o immaginari, crollano quando raggiungono tali poteri e tali altezze. Nel caso dei Targaryen, la loro lenta caduta inizia quasi 193 anni prima degli eventi de Il Trono di Spade, quando re Viserys Targaryen rompe un secolo di tradizione nominando sua figlia Rhaenyra erede al Trono di Spade. La corte rimane scioccata quando Rhaenyra mantiene il suo status di erede nonostante Viserys in seguito avrà un figlio maschio, legittimo erede. Inizia così ad attecchire il seme della divisione e forti attriti in tutto il regno.",
                    "popularity": 580.278,
                    "poster_path": "/paD01zRRCY3lXo038pvs2Avu0Q7.jpg",
                    "first_air_date": "2022-08-21",
                    "name": "House of the Dragon",
                    "vote_average": 8.421,
                    "vote_count": 3803
                },
                {
                    "adult": false,
                    "backdrop_path": "/7i5ibed3a5FW2LTFpECAxyLMTlK.jpg",
                    "genre_ids": [
                        18,
                        35
                    ],
                    "id": 61888,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Last Man on Earth",
                    "overview": "Nel 2020, dopo che una pandemia ha ucciso tutti gli abitanti della Terra, Phil Miller vaga per gli Stati Uniti cercando altri sopravvissuti; dopo non aver trovato nessuno fa ritorno nella sua città natale, Tucson, Arizona; Phil capisce di essere l'ultimo uomo sulla Terra, ma poco prima di suicidarsi in preda alla disperazione e al desiderio di incontrare una donna compare Carol, una donna eccentrica e assillante. Su insistenza di Carol i due si sposano in modo da poter ripopolare la Terra, ma il giorno dopo incontrano un'altra donna, Melissa, bionda e attraente, per la quale Phil fatica a tenere a bada i suoi desideri. Phil, Carol e Melissa incontrano poi un altro uomo, Todd, di cui Phil diventa invidioso nel momento in cui comincia una felice relazione con Melissa.",
                    "popularity": 522.849,
                    "poster_path": "/9TcvdOIBEnIDXbLvFUKluRDa3tZ.jpg",
                    "first_air_date": "2015-03-01",
                    "name": "The Last Man on Earth",
                    "vote_average": 6.906,
                    "vote_count": 797
                },
                {
                    "adult": false,
                    "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 100088,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Last of Us",
                    "overview": "Vent’anni dopo la distruzione della civiltà moderna Joel, uno scaltro sopravvissuto, viene incaricato di far uscire Ellie, una ragazza di 14 anni, da una zona di quarantena sotto stretta sorveglianza. Un compito all’apparenza facile che si trasforma presto in un viaggio brutale e straziante, in cui i due si troveranno a dover attraversare gli Stati Uniti insieme e a dipendere l’uno dall’altra per sopravvivere.",
                    "popularity": 397.047,
                    "poster_path": "/6WlffOd3bszyndGgsKGcUL6k28n.jpg",
                    "first_air_date": "2023-01-15",
                    "name": "The Last of Us",
                    "vote_average": 8.613,
                    "vote_count": 4631
                },
                {
                    "adult": false,
                    "backdrop_path": "/xuCHkaxkkm9pPum1SByC0dhvR2U.jpg",
                    "genre_ids": [
                        16,
                        10759,
                        10765
                    ],
                    "id": 91363,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "What If...?",
                    "overview": "Dopo gli eventi di Loki, il multiverso cade nella follia, mostrando degli universi in cui alcuni dei più importanti momenti del Marvel Cinematic Universe si svolgono in maniera differente...",
                    "popularity": 465.352,
                    "poster_path": "/blQIK1T9DxluV867Sm3McMbDC3L.jpg",
                    "first_air_date": "2021-08-11",
                    "name": "What If...?",
                    "vote_average": 8.169,
                    "vote_count": 4012
                },
                {
                    "adult": false,
                    "backdrop_path": "/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
                    "genre_ids": [
                        10759,
                        9648,
                        18
                    ],
                    "id": 93405,
                    "origin_country": [
                        "KR"
                    ],
                    "original_language": "ko",
                    "original_name": "오징어 게임",
                    "overview": "Centinaia di individui a corto di denaro accettano uno strano invito a competere in giochi per bambini. Li attende un premio invitante, ma la posta in gioco è mortale.",
                    "popularity": 157.266,
                    "poster_path": "/nW5rupC5zMeAGgGBYXkr8JL8Xq7.jpg",
                    "first_air_date": "2021-09-17",
                    "name": "Squid Game",
                    "vote_average": 7.831,
                    "vote_count": 13522
                },
                {
                    "adult": false,
                    "backdrop_path": "/ysaA0BInz4071p3LKqAQnWKZCsK.jpg",
                    "genre_ids": [
                        10751,
                        35,
                        18
                    ],
                    "id": 2004,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Malcolm in the Middle",
                    "overview": "La vita di Malcolm, ragazzino prodigio con una straordinaria dote per i calcoli, si articola in un brillante canovaccio che coinvolge i suoi strambi parenti: il padre Hal, la madre Lois e i fratelli Francis, Reese, Dewey e Jamie.",
                    "popularity": 1113.382,
                    "poster_path": "/kkEyQQro7M0Avxfiio81alDPdTd.jpg",
                    "first_air_date": "2000-01-09",
                    "name": "Malcolm",
                    "vote_average": 8.479,
                    "vote_count": 4101
                },
                {
                    "adult": false,
                    "backdrop_path": "/1i1N0AVRb54H6ZFPDTwbo9MLxSF.jpg",
                    "genre_ids": [
                        10765,
                        9648,
                        18
                    ],
                    "id": 85271,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "WandaVision",
                    "overview": "Wanda Maximoff e Visione, due esseri dotati di superpoteri che conducono una tranquilla vita di periferia, iniziano a sospettare che niente sia come sembra.",
                    "popularity": 320.095,
                    "poster_path": "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
                    "first_air_date": "2021-01-15",
                    "name": "WandaVision",
                    "vote_average": 8.243,
                    "vote_count": 11659
                },
                {
                    "adult": false,
                    "backdrop_path": "/s1GAT7wagWtC5TJ5HU0WTIxYBwR.jpg",
                    "genre_ids": [
                        10759,
                        16,
                        10762,
                        10751
                    ],
                    "id": 3854,
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Spectacular Spider-Man",
                    "overview": "Peter Parker, diventato Spider-Man da pochi mesi, è alle prese con il primo anno alla Midtown Manhattan Magnet High School. Intanto, per aiutare Zia May dopo la morte dello Zio Ben, Peter diventa un free-lance per il Daily Bugle, vendendo le foto dell'Uomo Ragno.",
                    "popularity": 291.855,
                    "poster_path": "/dCNxOhXT7c4lqYuRpdM3m8s9XDp.jpg",
                    "first_air_date": "2008-03-08",
                    "name": "The Spectacular Spider-Man",
                    "vote_average": 8.587,
                    "vote_count": 749
                },
                {
                    "adult": false,
                    "backdrop_path": "/zfLW1tXbWCIdCXQ8KUvBzULJm1d.jpg",
                    "genre_ids": [
                        35,
                        18
                    ],
                    "id": 67070,
                    "origin_country": [
                        "GB"
                    ],
                    "original_language": "en",
                    "original_name": "Fleabag",
                    "overview": "Fleabag è un’esilarante e intensa finestra nella mente di una londinese sarcastica, sensuale, arrabbiata e straziata dal dolore. La pluripremiata commediografa Phoebe Waller-Bridge ha scritto e recitato nel ruolo di protagonista di Fleabag, una donna priva di filtri inibitori che cerca di superare un lutto, ma si ostina ed allontana chiunque tenti di aiutarla mantenendo un atteggiamento spavaldo.",
                    "popularity": 162.528,
                    "poster_path": "/27vEYsRKa3eAniwmoccOoluEXQ1.jpg",
                    "first_air_date": "2016-07-21",
                    "name": "Fleabag",
                    "vote_average": 8.289,
                    "vote_count": 1275
                },

            ]
        }
    },
    methods: {
        prevGroup() {
            this.currentIndex = (this.currentIndex - this.groupItems + this.movieCarousel.length) % this.movieCarousel.length;
        },

        nextGroup() {
            this.currentIndex = (this.currentIndex + this.groupItems) % this.movieCarousel.length;
        }
    },
    computed: {
        slicedMovies() {
            return this.movieCarousel.slice(this.currentIndex, this.currentIndex + this.groupItems);
        }
    }
}
</script>

<template>
    <h2>
        Ecco le serie più popolari
    </h2>
    <div class="movieCarousel">
        <button class="prev" @click="prevGroup()"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="nextGroup()"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="card" v-for="(movie, id) in slicedMovies" :key="id">
            <div class="card-top">
                <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" alt="">
            </div>
            <div class="card-detail">
                <p>Titolo: {{ movie.title }} </p>
                <p>Titolo Originale: {{ movie.original_title }} </p>
                <span v-if="movie.original_language in state.flags">
                    <img class="flags" v-bind:src="state.flags[movie.original_language]" alt="">
                </span>
                <p v-else> Lingua originale: {{ movie.original_language }}</p>
                <div class="star-container">
                    <span v-for="n in Math.ceil(movie.vote_average / 2)" :key="n">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in 5 - Math.ceil(movie.vote_average / 2)">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.movieCarousel {
    display: flex;
    gap: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: center;
    position: relative;
    margin-top: 2rem;
    margin-bottom: 5rem;

    .prev {
        position: absolute;
        left: 0rem;
        top: 13rem;
        font-size: 2rem;
        padding: 0.5rem;
        background-color: rgba(78, 78, 78, 0.411);
        border: none;
        z-index: 100;
    }


    .next {
        position: absolute;
        right: 0rem;
        top: 13rem;
        font-size: 2rem;
        padding: 0.5rem;
        background-color: rgba(78, 78, 78, 0.445);
        border: none;
        z-index: 10;
    }

    .card {
        border: 0.5px solid white;
        position: relative;
    }

    .card-top {
        height: 100%;

        & img {
            height: 100%;
            width: 300px
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
        padding: 0.5rem;
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
