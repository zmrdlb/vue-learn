import { Route } from 'vue-router'

import ViewBase from '../views/view-base.vue'
import Home from '../views/home.vue'
import User from '../views/user/index.vue'
import Component from 'vue-class-component'

// 按组懒加载 - news
const NewsBase = () => import(/* webpackChunkName: "news" */ '../views/news/base.vue')
const News = () => import(/* webpackChunkName: "news" */ '../views/news/index.vue')
const NewsDetail = () => import(/* webpackChunkName: "news" */ '../views/news/detail.vue')

// 按组懒加载 - ued
const UedIndex = () => import(/* webpackChunkName: "ued" */ '../views/ued/index.vue')
const UedBaseElem = () => import(/* webpackChunkName: "ued" */ '../views/ued/base.vue')
const UedModal = () => import(/* webpackChunkName: "ued" */ '../views/ued/modal.vue')

const Login = () => import('../views/user/login.vue')

Component.registerHooks([
  'beforeEnter',
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

export default [{
    path: '/',
    name: 'view-base',
    component: ViewBase,
    children: [{ //默认首页
        path: '',
        name: 'home',
        component: Home
    },{ // 新闻列表专题
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
},{
    path: '/ued',
    name: 'ued-index',
    component: UedIndex,
    children: [{
        path: 'base',
        name: 'ued-base',
        component: UedBaseElem
    },{
        path: 'modal',
        name: 'ued-modal',
        component: UedModal
    }]
}]
