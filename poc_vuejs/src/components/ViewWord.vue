<script>
export default {
    name: "ViewWord",
    props: {
        stateOfAPI: String,
        wordText: String,
        dataList: Array // result list
    }
}
</script>

<template>
    <div>
        <div v-if="stateOfAPI === 'success'" class="word-info">
            <h1>Word: {{ $func.toUpperFirstLetter(wordText) }}</h1>
            <br>
            <div class="word-definitions">
                <h3 style="text-align: left">Definitions: </h3>
                <p v-for="(result, index) in dataList" :key="index">{{ $func.toUpperFirstLetter(result.definition) }}</p>
            </div>
            <br>
            <div class="word-synonyms">
                <h3>Synonyms: </h3>
                <p v-for="(result, index) in dataList" :key="index">
                    <span v-for="(synonym, synonymIndex) in result.synonyms" :key="synonymIndex">
                        {{ $func.toUpperFirstLetter(synonym) }}
                        <br>
                    </span>
                </p>
            </div>
        </div>
        <div v-else-if="stateOfAPI === 'loading'" class="loading-message">
            Loading...
        </div>
        <div v-else class="error-message">
            Error occurred while fetching data from API.
        </div>
    </div>
</template>
