<script>
import { state } from '../state';

export default {
    name: 'appCarouselMovie',
    data() {
        return {
            state,
            groupItems: 6,
            currentIndex: 0,
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
                    "backdrop_path": "/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
                    "genre_ids": [
                        10751,
                        16,
                        18
                    ],
                    "id": 8587,
                    "original_language": "en",
                    "original_title": "The Lion King",
                    "overview": "Convinto di essere responsabile della morte del padre re Mufasa, il piccolo leoncino Simba si allontana dalla sua terra. Accolto e allevato dal suricato Timon e dal facocero Pumbaa, Simba cresce cercando di dimenticare il passato. È ritrovato da Nala, sua vecchia compagna di giochi, e Rafiki, babbuino sciamano, che lo convincono a tornare per scacciare l'usurpatore Scar.",
                    "popularity": 117.998,
                    "poster_path": "/8FfIaBWb1IEmUf2c71IMGwz7wXv.jpg",
                    "release_date": "1994-06-24",
                    "title": "Il re leone",
                    "video": false,
                    "vote_average": 8.257,
                    "vote_count": 17593
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
                    "backdrop_path": "/xBDE2d6HM1aBKQRu4IT7SfPD9fs.jpg",
                    "genre_ids": [
                        18,
                        9648,
                        878
                    ],
                    "id": 1124,
                    "original_language": "en",
                    "original_title": "The Prestige",
                    "overview": "Due giovani maghi apprendisti, Robert Angier e Alfred Borden, vengono istruiti e seguiti da Cutter, un ingegnere illusionista ed ex mago, ma durante un numero in cui una donna viene legata e messa in una cassa di vetro piena d'acqua, qualcosa va storto e Angier incolperà l'amico dell'accaduto, tentando di vendicarsi. Inizia così un crudele gioco tra i due uomini su chi sia il migliore e la rivalità si trasformerà pian piano in ossessione.",
                    "popularity": 54.51,
                    "poster_path": "/xKsiJimxRa44FArhlfGHnylrT0i.jpg",
                    "release_date": "2006-10-19",
                    "title": "The Prestige",
                    "video": false,
                    "vote_average": 8.2,
                    "vote_count": 15342
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
                {
                    "adult": false,
                    "backdrop_path": "/fydUcbkqLyESCFa9U5XKqi8dIVj.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        12,
                        14
                    ],
                    "id": 109445,
                    "original_language": "en",
                    "original_title": "Frozen",
                    "overview": "Nell'immaginario regno di Arendelle, situato su un fiordo, vivono due sorelle unite da un grande affetto. Un giorno, però, il magico potere di Elsa di comandare la neve e il ghiaccio per poco non uccide la più piccola Anna. Cresciuta nel dolore di quel ricordo, Elsa chiude le porte del palazzo e allontana da sé l'amata sorella per lunghi anni, fino al giorno della sua incoronazione a regina. Ma ancora una volta l'emozione prevale, scatena la magia e fa piombare il regno in un inverno senza fine. Sarà Anna, con l'aiuto del nuovo amico Kristoff e della sua renna Sven, a mettersi alla ricerca di Elsa, fuggita lontano da tutti, per chiederle di tornare e portare l'atteso disgelo.",
                    "popularity": 95.177,
                    "poster_path": "/kWsuNQ3z9aj7Bu8M7X90b30NjAw.jpg",
                    "release_date": "2013-11-20",
                    "title": "Frozen - Il regno di ghiaccio",
                    "video": false,
                    "vote_average": 7.247,
                    "vote_count": 15990
                },
                {
                    "adult": false,
                    "backdrop_path": "/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg",
                    "genre_ids": [
                        28,
                        12,
                        878,
                        53
                    ],
                    "id": 351286,
                    "original_language": "en",
                    "original_title": "Jurassic World: Fallen Kingdom",
                    "overview": "Sono passati tre anni da quando il parco tematico di Jurassic World è stato distrutto dai dinosauri scappati dalle gabbie di contenimento; Isla Nublar adesso è un luogo selvaggio abbandonato dagli umani dove i dinosauri sopravvissuti cercano riparo nella giungla.  Al risveglio del vulcano, inattivo fino a quel momento, Owen (Chris Pratt) e Claire (Bryce Dallas Howard) intraprendono una campagna per salvaguardare le specie di dinosauri ancora in vita da un evento di distruzione di massa. Owen è intento a cercare Blue, il suo principale velociraptor ancora disperso nella foresta, mentre Claire nel frattempo ha sviluppato un rispetto nei confronti di queste creature, divenute ormai la sua missione.  Giunti sull’isola proprio mentre la lava inizia a scorrere i due scoprono anche una cospirazione di portata globale che potrebbe far ritornare l’intero pianeta a un rovinoso stato di disordine come non si vedeva dalla preistoria.",
                    "popularity": 94.27,
                    "poster_path": "/4iGHioQuva4Q3KkeYNgohMP9kaR.jpg",
                    "release_date": "2018-06-06",
                    "title": "Jurassic World – Il regno distrutto",
                    "video": false,
                    "vote_average": 6.546,
                    "vote_count": 11379
                },
                {
                    "adult": false,
                    "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "id": 572802,
                    "original_language": "en",
                    "original_title": "Aquaman and the Lost Kingdom",
                    "overview": "Non riuscendo a sconfiggere Aquaman la prima volta, Black Manta, ancora spinto dal bisogno di vendicare la morte di suo padre, non si fermerà davanti a nulla pur di annientare Aquaman una volta per tutte. Questa volta Black Manta, in possesso del potere del mitico Tridente Nero, che scatena una forza antica e malevola, è più temibile che mai. Per sconfiggerlo Aquaman si rivolgerà al fratello imprigionato Orm, l'ex re di Atlantide, per forgiare un'improbabile alleanza. Insieme dovranno mettere da parte le loro divergenze per proteggere il loro regno e salvare la famiglia di Aquaman, e il mondo intero, da una distruzione irreversibile.",
                    "popularity": 281.385,
                    "poster_path": "/yv77pBEJa3yKvv3qRQHJZfu1jci.jpg",
                    "release_date": "2023-12-20",
                    "title": "Aquaman e il regno perduto",
                    "video": false,
                    "vote_average": 6.81,
                    "vote_count": 2203
                },
                {
                    "adult": false,
                    "backdrop_path": "/uLhWh1pggjIiQ1DpL0DvaIgERQR.jpg",
                    "genre_ids": [
                        878,
                        12,
                        28
                    ],
                    "id": 653346,
                    "original_language": "en",
                    "original_title": "Kingdom of the Planet of the Apes",
                    "overview": "Diverse generazioni nel futuro dopo il regno di Cesare, le scimmie sono ora la specie dominante che vive armoniosamente e gli umani sono stati ridotti a vivere nell'ombra. Mentre un nuovo tirannico capo scimmia costruisce il suo impero, una giovane scimmia intraprende un viaggio straziante che la porterà a mettere in discussione tutto ciò che ha conosciuto del passato e a fare delle scelte che definiranno un futuro sia per le scimmie che per gli umani.",
                    "popularity": 207.317,
                    "poster_path": "/nHAmd6yp025PqjHGD3VzfBssxFp.jpg",
                    "release_date": "2024-05-08",
                    "title": "Il regno del pianeta delle scimmie",
                    "video": false,
                    "vote_average": 0.0,
                    "vote_count": 0
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
        Ecco i nostri film più amati
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
    margin-bottom: 5rem;
    margin-top: 2rem;

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
