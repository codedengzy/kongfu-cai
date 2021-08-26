import { createRouter, createWebHistory } from 'vue-router'
import indexWrap from '../views/indexWrap.vue'
import allProducts from '../views/allProducts.vue'
import goodsDetail from '../views/goodsDetail.vue'
import shoppingCart from '../views/shoppingCart.vue'
import userCenter from '../views/userCenter.vue'
import customerServe from '../views/customerServe.vue'

const routes = [{
        path: '/',
        name: 'indexWrap',
        component: indexWrap
    },
    {
        path: '/allProducts',
        name: 'allProducts',
        component: allProducts
    },
    {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: goodsDetail
    },
    {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: shoppingCart
    },
    {
        path: '/userCenter',
        name: 'userCenter',
        component: userCenter
    },
    {
        path: '/customerServe',
        name: 'customerServe',
        component: customerServe
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router