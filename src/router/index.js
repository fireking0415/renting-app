import Vue from 'vue'
import VueRouter from 'vue-router'
import AggregateSearch from "@/components/AggregateSearch";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '聚合检索',
        component: AggregateSearch
    }
]

const router = new VueRouter({
    routes
})

export default router
