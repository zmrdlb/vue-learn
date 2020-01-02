import { Route } from 'vue-router'

import Home from '../views/Home.vue'

import User from '../views/user/index.vue'

import Component from 'vue-class-component'

// 按组懒加载
const NewsBase = () => import(/* webpackChunkName: "group-news" */ '../views/news/base.vue')
const News = () => import(/* webpackChunkName: "group-news" */ '../views/news/index.vue')
const NewsDetail = () => import(/* webpackChunkName: "group-news" */ '../views/news/detail.vue')
const Login = () => import('../views/user/login.vue')
Component.registerHooks([
  'beforeEnter',
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

export default [{
  path: '/',
  name: 'home',
  component: Home
}, { // 新闻列表专题
  path: '/news',
  name: 'news-base',
  component: NewsBase,
  children: [{
    path: '',
    name: 'news',
    component: News
  }, {
    path: ':id',
    name: 'news-detail',
    component: NewsDetail
  }]
}, { // 以下为user相关路由
  path: '/user',
  name: 'user',
  component: User,
  beforeEnter: (to: Route, from: Route, next: (route?: object) => void) => {
    if (!sessionStorage.getItem('userinfo')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
}, {
  path: '/login', name: 'login', component: Login
}]
