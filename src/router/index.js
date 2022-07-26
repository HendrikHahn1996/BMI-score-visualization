import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView'
import BMIView from '@/views/BMIView'

const routes = [
    {
        path: '/',
        name: 'WelcomeView',
        component: WelcomeView
    },
    {
        path: '/BmiView',
        name: 'BMIView',
        component: BMIView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router; 