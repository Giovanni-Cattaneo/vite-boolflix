<script>
import { state } from '../state';

export default {
    name: 'appCarouselMovie',
    data() {
        return {
            state,
            groupItems: 5,
            movieCarousel: [
                {
                    "adult": false,
                    "backdrop_path": "/8K9qHeM6G6QjQN0C5XKFGvK5lzM.jpg",
                    "genre_ids": [
                        28,
                        878
                    ],
                    "id": 603,
                    "original_language": "en",
                    "original_title": "The Matrix",
                    "overview": "Seguendo un tatuaggio sulla spalla di una ragazza, l'hacker Neo scopre che la cosiddetta \"realtà\" è solo un impulso elettrico fornito al cervello degli umani da un'intelligenza artificiale. Per sopravvivere alla catastrofe l'umanità ha infatti avuto bisogno delle macchine, ma queste hanno vinto e necessitano degli uomini come fonte di energia. L'illusione in cui li fanno vivere è quindi finalizzata a \"coltivarli\" meglio. Nessuno è a conoscenza del tempo che è passato da quando il neurosimulatore ha assegnato una data fittizia al tempo. Solo Neo, con l'aiuto del pirata informatico Morpheus e della bella Trinity, può tentare di scoprire la verità, ma non sarà un'impresa facile.",
                    "popularity": 107.247,
                    "poster_path": "/5uCQOswAMkOqUZiNzOxvckw59e3.jpg",
                    "release_date": "1999-03-31",
                    "title": "Matrix",
                    "video": false,
                    "vote_average": 8.214,
                    "vote_count": 24700
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
                    "popularity": 142.118,
                    "poster_path": "/xvjOBWfm32skiwIAU2iocb6fyC8.jpg",
                    "release_date": "2001-12-18",
                    "title": "Il Signore degli Anelli - La compagnia dell'anello",
                    "video": false,
                    "vote_average": 8.411,
                    "vote_count": 24180
                },
                {
                    "adult": false,
                    "backdrop_path": "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
                    "genre_ids": [
                        878,
                        28,
                        12
                    ],
                    "id": 624860,
                    "original_language": "en",
                    "original_title": "The Matrix Resurrections",
                    "overview": "Due realtà differenti caratterizzano il mondo: una rappresentata dalla vita di tutti i giorni e un'altra nascosta e inaccessibile. Per scoprire se la sua realtà è un costrutto fisico o mentale, per conoscere veramente se stesso, Mr. Anderson dovrà scegliere di seguire ancora una volta il Bianconiglio. E se Thomas, Neo, ha imparato qualcosa è che la scelta, pur essendo un'illusione, è ancora una volta la via d'uscita o di ingresso in Matrix. Ovviamente, Neo sa già cosa deve fare. Ma quello che ancora non sa è che Matrix è più forte, più sicura e più pericolosa che mai. Salvato da Matrix per diventare il salvatore dell'umanità, ancora una volta dovrà scegliere quale strada prendere.",
                    "popularity": 70.699,
                    "poster_path": "/sZCT1D5yLNVHarTpv157FaLzPCc.jpg",
                    "release_date": "2021-12-16",
                    "title": "Matrix Resurrections",
                    "video": false,
                    "vote_average": 6.439,
                    "vote_count": 5386
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
                    "popularity": 110.4,
                    "poster_path": "/96XilLzI7bijsCG4l7oW6I62oad.jpg",
                    "release_date": "2003-12-01",
                    "title": "Il Signore degli Anelli - Il ritorno del re",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 23238
                },
                {
                    "adult": false,
                    "backdrop_path": "/u2IlqBzlGqMwDnQsoskjCohgaPO.jpg",
                    "genre_ids": [
                        12,
                        28,
                        53,
                        878
                    ],
                    "id": 604,
                    "original_language": "en",
                    "original_title": "The Matrix Reloaded",
                    "overview": "Ora Neo controlla perfettamente i suoi straordinari poteri e Zion è assediata dall'Esercito delle Macchine. Solo poche ore separano l'ultima enclave umana sulla Terra da 250.000 Sentinelle programmate per distruggere il genere umano. Ma i cittadini di Zion, incoraggiati dalla convinzione di Morpheus che L'Eletto adempierà la Profezia dell'Oracolo e metterà fine alla guerra con le Macchine, puntano tutte le loro speranze su Neo, che si ritrova bloccato da visioni sconvolgenti. Resi più forti dall'amore e dalla fiducia che li lega, Neo e Trinity scelgono di tornare in Matrix con Morpheus e di lottare contro le forze della repressione e dello sfruttamento. Ma esistono ancora figure potenti dentro Matrix che si oppongono all'artificio della scelta, e si sottraggono alla responsabilità che comporta, poiché si cibano delle verità emotive degli altri.",
                    "popularity": 49.962,
                    "poster_path": "/bgx0hblyE1XYWHFFewrYjXE6DeQ.jpg",
                    "release_date": "2003-05-15",
                    "title": "Matrix Reloaded",
                    "video": false,
                    "vote_average": 7.046,
                    "vote_count": 10524
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
                    "popularity": 106.226,
                    "poster_path": "/fVKewiBPcY2dQujYEsnQmQ7lfRZ.jpg",
                    "release_date": "2002-12-18",
                    "title": "Il Signore degli Anelli - Le due torri",
                    "video": false,
                    "vote_average": 8.394,
                    "vote_count": 21011
                },
                {
                    "adult": false,
                    "backdrop_path": "/533xAMhhVyjTy8hwMUFEt5TuDfR.jpg",
                    "genre_ids": [
                        12,
                        28,
                        53,
                        878
                    ],
                    "id": 605,
                    "original_language": "en",
                    "original_title": "The Matrix Revolutions",
                    "overview": "Neo è in coma nell'infermeria della Hammer, ma la sua mente si trova intrappolata in una sorta di limbo situato tra il mondo reale e matrix. Il creatore del limbo virtuale è un nuovo personaggio, enigmatico e misterioso quanto la figura del fabbricante di chiavi, ma con un dentista decisamente peggiore. Toccherà ai compagni di Neo l'arduo compito di liberarlo, tornando nel castello del Merovingio, che muove i fili del gioco. Riuscirà Zion a resistere all'inesorabile avanzata delle macchine? Potrà l'eletto sconfiggere il suo nemico giurato, l'agente Smith?",
                    "popularity": 48.173,
                    "poster_path": "/cGprSBfxwOxgExQnwFz39XKl3H2.jpg",
                    "release_date": "2003-11-05",
                    "title": "Matrix Revolutions",
                    "video": false,
                    "vote_average": 6.718,
                    "vote_count": 9488
                },
                {
                    "adult": false,
                    "backdrop_path": "/3dPhs7hUnQLphDFzdkD407VZDYo.jpg",
                    "genre_ids": [
                        18,
                        12,
                        878
                    ],
                    "id": 286217,
                    "original_language": "en",
                    "original_title": "The Martian",
                    "overview": "Durante una missione su Marte, l’astronauta Mark Watney (Matt Damon) viene considerato morto dopo una forte tempesta e per questo abbandonato dal suo equipaggio. Ma Watney è sopravvissuto e ora si ritrova solo sul pianeta ostile. Con scarse provviste, Watney deve attingere al suo ingegno, alla sua arguzia e al suo spirito di sopravvivenza per trovare un modo per segnalare alla Terra che è vivo. A milioni di chilometri di distanza, la NASA e un team di scienziati internazionali lavorano instancabilmente per cercare di portare “il marziano” a casa, mentre i suoi compagni cercano di tracciare un’audace, se non impossibile, missione di salvataggio.",
                    "popularity": 67.217,
                    "poster_path": "/ic1Ojv8jurZn4dFywHPBrvXMduf.jpg",
                    "release_date": "2015-09-30",
                    "title": "Sopravvissuto - The Martian",
                    "video": false,
                    "vote_average": 7.683,
                    "vote_count": 19087
                },
                {
                    "adult": false,
                    "backdrop_path": "/cLZsdMMC3hoVQy9xwn3YJ4CR9Pd.jpg",
                    "genre_ids": [
                        35,
                        10402,
                        10749
                    ],
                    "id": 11172,
                    "original_language": "en",
                    "original_title": "Music and Lyrics",
                    "overview": "Ad Alex Fletcher, una popstar degli anni '80 ormai in declino, viene proposta un'occasione irrinunciabile: scrivere una canzone per Cora Corman, l'idolo del momento, e cantarla insieme a lei. Il sogno di un ritorno dignitoso sulle scene - dopo anni di esibizioni in alberghi e luna park di fronte a un pubblico di donne tutte grida e nostalgia - si smaterializza quando viene a sapere che il tempo a disposizione è risicato. Alex non è mai stato bravo con le parole e non scrive un brano da quindici anni. Proprio quando pensa di non potercela fare scopre che Sophie Fisher - una bizzarra annaffiatrice-supplente che gli entra in casa come un tornado - ha un dono particolare per le rime e la convince ad aiutarlo. Gli sforzi dei due daranno vita alla canzone \"Way Back Into Love\", che li guiderà sulla strada dell'amore.",
                    "popularity": 21.877,
                    "poster_path": "/tsboStF46QtfrV55RSLe0NS5LvQ.jpg",
                    "release_date": "2007-02-09",
                    "title": "Scrivimi una canzone",
                    "video": false,
                    "vote_average": 6.426,
                    "vote_count": 1599
                },
                {
                    "adult": false,
                    "backdrop_path": "/wmsePXV2z1b6ecXuKKrFbG0Q92P.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 13223,
                    "original_language": "en",
                    "original_title": "Gran Torino",
                    "overview": "Walt Kowalski è un veterano della guerra in Corea e non sopporta che nell'abitazione di fianco alla sua viva una famiglia di asiatici. Le uniche sue passioni, oltre alla birra, sono il suo cane e un'auto modello Gran Torino, che viene sottoposta a continua manutenzione. La sua vita cambia il giorno in cui il giovane vicino Thao, spinto da una gang, si introduce nel suo garage. Walt lo fa fuggire, ma di lì a poco tempo assisterà a una violenta irruzione dei membri della gang con inatteso sconfinamento nella sua proprietà. In quell'occasione sottrarrà Thao alla violenza del branco, ottenendo la riconoscenza della sua famiglia.",
                    "popularity": 35.275,
                    "poster_path": "/eUepSGWIJjXeMAlSnk4CSZKOTfg.jpg",
                    "release_date": "2008-12-12",
                    "title": "Gran Torino",
                    "video": false,
                    "vote_average": 7.992,
                    "vote_count": 10337
                },
                {
                    "adult": false,
                    "backdrop_path": "/ShDHEWiJ4NL6ldn4W2m3bEkIBr.jpg",
                    "genre_ids": [
                        18,
                        53,
                        80,
                        9648
                    ],
                    "id": 186,
                    "original_language": "en",
                    "original_title": "Lucky Number Slevin",
                    "overview": "New York. A causa di uno scambio di identità Slevin rimane coinvolto nella guerra ordita da due capi criminali acerrimi nemici: Il Rabbino e Il Boss. Slevin è costantemente sorvegliato dall'inflessibile Detective Brikowski e dallo scellerato assassino Goodkat. Per riuscire ad uscirne vivo Slevin dovrà tramare un'ingegnosa congiura...",
                    "popularity": 32.636,
                    "poster_path": "/suzTox5mFsrmmrZcLbnJw7GWAXY.jpg",
                    "release_date": "2006-02-24",
                    "title": "Slevin - Patto criminale",
                    "video": false,
                    "vote_average": 7.478,
                    "vote_count": 3890
                },
                {
                    "adult": false,
                    "backdrop_path": "/6WRrGYalXXveItfpnipYdayFkQB.jpg",
                    "genre_ids": [
                        18,
                        53,
                        80
                    ],
                    "id": 1422,
                    "original_language": "en",
                    "original_title": "The Departed",
                    "overview": "Boston. È in atto una guerra tra la polizia locale e una banda della malavita organizzata. Billy Costigan, giovane poliziotto in incognito, riceve l'incarico di infiltrarsi nella gang capeggiata dal boss Frank Costello. Mentre Billy guadagna rapidamente la fiducia di Costello, Colin Sullivan, giovane criminale incallito infiltrato nel dipartimento di polizia come informatore della gang, guadagna una posizione di rilievo nell'unità speciale di investigazione. Sia Billy che Colin vivono questa doppia vita come un'esperienza alienante, ma appena appare chiara l'esistenza di una talpa, sia all'interno della polizia che fra i gangster, entrambi dovranno, in una corsa contro il tempo, scoprire l'identità dell'altro per salvarsi.",
                    "popularity": 52.569,
                    "poster_path": "/mSEFwJ1y7V3dmyfX0Yn4GIyXvqi.jpg",
                    "release_date": "2006-10-04",
                    "title": "The Departed - Il bene e il male",
                    "video": false,
                    "vote_average": 8.167,
                    "vote_count": 14319
                },


            ]
        }
    },
    methods: {
        prevGroup() {

        },

        nextGroup() {

        }
    }
}
</script>

<template>
    <div class="movieCarousel">
        <button class="prev" @click="prev"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="next"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="card" v-for="(movie, id) in movieCarousel" :key="id">
            <div class="card-top">
                <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
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

<style scoped></style>
