import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/chat/',
        name: 'Chat',
        component: () => import('@/views/chat/Chat.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
