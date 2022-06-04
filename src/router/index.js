import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            name: 'Главная',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            name: 'Авторизация',
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
        meta: {
            name: 'Регистрация',
        },
    },
    {
        path: '/characterList',
        name: 'CharacterList',
        component: () => import('@/views/CharacterList.vue'),
        meta: {
            name: 'Список персонажей',
        },
    },
    {
        path: '/serverRules',
        name: 'ServerRules',
        component: () => import('@/views/ServerRules.vue'),
        meta: {
            name: 'Правила сервера',
        },
    },
    {
        path: '/сombatSystem',
        name: 'CombatSystem',
        component: () => import('@/views/CombatSystem.vue'),
        meta: {
            name: 'Боевая система',
        },
    },
    {
        path: '/online',
        name: 'Online',
        component: () => import('@/views/Online.vue'),
        meta: {
            name: 'Онлайн',
        },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        children: [
            {
                path: 'character',
                name: 'Character',
                component: () => import('@/views/profile/Character.vue'),
                meta: {
                    name: 'Персонаж',
                },
            },
        ],
    },
    {
        path: "/error",
        name: "Error",
        component: () => import("@/views/ErrorPage.vue"),
        meta: {
            name: '404',
        },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/error",
        meta: {
            name: 'Redirect',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
