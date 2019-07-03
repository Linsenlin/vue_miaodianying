import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie/index'
import CinemaRouter from './cinema/index'
import MineRouter from './mine/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    CinemaRouter,
    MineRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   name: 'movie',
    //   path: '/',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/Movie')
    // }
  ]
})
