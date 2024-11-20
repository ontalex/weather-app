import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Wethers from './views/wethers/Wethers.vue'
import Main from './views/main/Main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Main },
        { path: "/weathers", component: Wethers },
    ]
})

createApp(App).use(router).mount('#app');
