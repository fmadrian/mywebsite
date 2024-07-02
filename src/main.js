// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import ProjectList from './pages/ProjectList.vue';
import { APP_ROUTES } from './utils/AppRoutes';

// import { createPinia } from 'pinia';
const routes = [
    { path: "", component: Home },
    { path: APP_ROUTES.projects, component: ProjectList },
    // Not found component.
    { path: APP_ROUTES.notFound, component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App);

app.use(router);
// app.use(createPinia());

app.mount('#app');