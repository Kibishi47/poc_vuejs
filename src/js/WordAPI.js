import $ from 'jquery';

export default class WordAPI {
    randomWordsURL = "https://wordsapiv1.p.rapidapi.com/words";
    getWordURL = "https://wordsapiv1.p.rapidapi.com/words";
    APIkey = 'e6acbf1a6amsh5b22e4e20e9b4cep1bfc78jsn29dbb3c5b2ef';
    APIhost = 'wordsapiv1.p.rapidapi.com';

    constructor() {}

    async getRandomWords(number) {
        const settings = {
            async: true,
            crossDomain: true,
            url: this.randomWordsURL + "?random=true",
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.APIkey,
                'X-RapidAPI-Host': this.APIhost
            }
        };
        // Fonction pour faire une seule requête AJAX
        const fetchWord = async () => {
            const response = await this.useAPI(settings);
            return response.word;
        };

        // Tableau pour stocker les mots aléatoires
        const words = [];

        // Fonction pour récupérer plusieurs mots aléatoires
        const fetchRandomWords = async () => {
            for (let i = 0; i < number; i++) {
                const word = await fetchWord();
                words.push(word);
            }
            return words;
        };

        // Appel de la fonction pour récupérer les mots aléatoires
        return fetchRandomWords();
    }
    
    

    getWord(wordText) {
        const settings = {
            async: true,
            crossDomain: true,
            url: this.getWordURL + "/" + wordText,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.APIkey,
                'X-RapidAPI-Host': this.APIhost
            }
        };
        return this.useAPI(settings);
    }

    useAPI(settings) {
        return new Promise((resolve, reject) => {
            $.ajax(settings).done(function(response) {
                resolve(response); // Renvoyer la réponse via la promesse
            }).fail(function(error) {
                reject(error); // Renvoyer l'erreur via la promesse en cas d'échec
            });
        });
    }
}
