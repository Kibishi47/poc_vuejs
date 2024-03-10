<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name:'test', query: { username: 'pseudoTest', pageFrom: 'about'}}">Go to Test with Data</router-link>
  </div>
</template>
