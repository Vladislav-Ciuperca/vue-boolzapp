const { createApp } = Vue

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            fix: 'sent-line',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            fix: 'sent-line',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'andrea',
                    avatar: './img/avatar9.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ce bge v65633h356bvy3 h6 b356g era?',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Nob 356b35 634b326hgbnbtyhi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: ' 5tgrb3t5y3ht53b3bgb',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'federico calcetto',
                    avatar: './img/avatar10.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'C 3563 5gby4 h6b23tgbrnu6jm za stasera?',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'N f31q34gvbgfbvmnu wet ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'asdvsw ghs sggs gfh jj!',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'andrea calcetto',
                    avatar: './img/avatar11.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao,sbg sg sdfgsva z fga?',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, dfgatb dhjgmgfgbieri, ordiniamo sushi!',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Odfghdfgjdnghfdhfg',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'eliso calcetto',
                    avatar: './img/avatar12.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'gwergwergwela pizza stasera?',
                            fix: 'received-line',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho dasgdfsgtrwr',
                            fix: 'sent-line',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'dadgfadsfgdga!!',
                            fix: 'received-line',
                            status: 'received'
                        }
                    ],
                },
            ],

            activeChat: 0,

        }
    },
    methods: {

        getActive(index) {
            this.activeChat = index
        }

    },
    mounted() {

        // placeholder

    }

}).mount('#app')