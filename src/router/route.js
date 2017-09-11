import Hello from '../page/Hello'

//按组懒加载
const NewsBase = () => import(/* webpackChunkName: "group-news" */ '../page/news/base')
const News = () => import(/* webpackChunkName: "group-news" */ '../page/news/index')
const NewsDetail = () => import(/* webpackChunkName: "group-news" */ '../page/news/detail')

import User from '../page/user/index'
const Login = () => import('../page/user/login')

export default [{
  path: '/',
  name: 'hello',
  component: Hello
}, { //新闻列表专题
  path: '/news', name: 'news-base', component: NewsBase,
  children: [{
    path: '',
    name: 'news',
    component: News
  },{
    path: ':id',
    name: 'news-detail',
    component: NewsDetail
  }]
}, { //以下为user相关路由
  path: '/user', name: 'user', component: User,
  beforeEnter: (to, from, next) => {
    if(!sessionStorage.getItem('userinfo')){
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }else{
      next();
    }
  }
},{
  path: '/login', name: 'login', component: Login
}]
