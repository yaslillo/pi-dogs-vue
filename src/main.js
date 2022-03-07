import { createApp } from 'vue'
import App from './App.vue'
import DogHome from './views/DogHome.vue';
import DogDetail from './views/DogDetail.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: DogHome },
    { path: '/dog-detail/:id', props: true, name: 'dog-detail', component: DogDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
