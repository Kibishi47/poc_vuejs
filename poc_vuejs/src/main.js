import { createApp } from 'vue'; // Importez createApp depuis 'vue'
import App from './App.vue';
import router from './router';
import { func } from '@/js/global.js'; // Importez votre méthode globale depuis le fichier global.js

const app = createApp(App); // Créez votre application Vue

// Ajoutez votre méthode globale à l'instance de l'application Vue
app.config.globalProperties.$func = func;

// Utilisez les plugins et montez l'application
app.use(router).mount('#app');
