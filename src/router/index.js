import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            name: 'Главная',
            navigator: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            name: 'Авторизация',
            navigator: false,
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
        meta: {
            name: 'Регистрация',
            navigator: false,
        },
    },
    {
        path: '/abilityList',
        name: 'AbilityList',
        component: () => import('@/views/AbilityList.vue'),
        meta: {
            name: 'Список навыков',
            navigator: true,
        },
    },
    {
        path: '/characterList',
        name: 'CharacterList',
        component: () => import('@/views/CharacterList.vue'),
        meta: {
            name: 'Список персонажей',
            navigator: true,
        },
    },
    {
        path: "/error",
        name: "Error",
        component: () => import("@/views/ErrorPage.vue"),
        meta: {
            name: '404',
            navigator: false,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/error",
        meta: {
            name: 'Redirect',
            navigator: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
