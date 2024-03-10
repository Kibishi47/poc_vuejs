<template>
    <div class="container">
        <ListWord :dataList="wordsFromAPI"/>
    </div>
</template>

<script>
import ListWord from '@/components/ListWord.vue';
import WordAPI from '@/js/WordAPI.js';

export default {
    name: "WordView",
    components: {
        ListWord
    },
    data() {
        return {
            wordsFromAPI: []
        };
    },
    created() {
        const wordAPI = new WordAPI();
        wordAPI.getRandomWords(2).then(response => {
            this.wordsFromAPI = response;
        }).catch(error => {
            console.error(error);
        });
    }
}
</script>
