import Vue from 'vue'
import Router from 'vue-router'
import Docker from '../components/content/Docker'
import Git from '../components/content/Git'
import Database from '../components/content/Database'

Vue.use(Router)

export default new Router({
    mode : 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/docker',
            name: 'docker',
            component: Docker
        },
        {
            path: '/git',
            name: 'git',
            component: Git
        },
        {
            path: '/db',
            name: 'database',
            component: Database
        }
    ]
})