<script>
export default{
    name: "ListWord",
    props: {
        dataList: Array //words list
    },
    data() {
        return {
        inputValue: ''
        };
    },
    methods: {
        redirectToPage() {
        this.$router.push({ name: 'word', params: { wordText: this.inputValue }});
        }
    }
}
</script>

<template>
    <input type="text" v-model="inputValue" placeholder="Enter an english word">
    <button @click="redirectToPage">See definition and synonyms</button>
    <div class="word" v-for="(word, index) in dataList" :key="index">
        <router-link :to="'/word/' + word">{{ $func.toUpperFirstLetter(word) }}</router-link><br>
    </div>
</template>