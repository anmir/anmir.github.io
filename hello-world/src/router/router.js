import Vue from 'vue'
import Router from 'vue-router'
import Component1 from '../components/Component1'

Vue.use(Router)

export default new Router({
    mode : 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/comp1',
            name: 'news',
            component: Component1
        }
    ]
})