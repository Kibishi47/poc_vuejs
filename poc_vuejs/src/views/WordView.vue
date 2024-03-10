<template>
    <div class="container">
      <ViewWord :wordText="wordTextFromAPI" :dataList="dataListFromAPI" :stateOfAPI="stateOfAPI"/>
    </div>
  </template>
  
  <script>
  import ViewWord from '@/components/ViewWord.vue';
  import WordAPI from '@/js/WordAPI.js';
  
  export default {
    name: "WordView",
    components: {
      ViewWord
    },
    data() {
      return {
        wordTextFromAPI: '',
        definitionFromAPI: '',
        stateOfAPI: 'loading'
      };
    },
    created() {
      const wordAPI = new WordAPI();
      const wordText = this.$route.params.wordText;
      wordAPI.getWord(wordText).then(response => {
        this.stateOfAPI = 'success';
        this.wordTextFromAPI = response.word;
        this.dataListFromAPI = response.results;
      }).catch(error => {
        this.stateOfAPI = 'error';
        console.error(error);
      });
    }
  }
  </script>
  