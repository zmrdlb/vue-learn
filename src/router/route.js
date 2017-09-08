import Hello from '@/components/Hello'

import NewsBase from '../page/news/base'
import News from '../page/news/index'
import NewsDetail from '../page/news/detail'

export default [{
  path: '/',
  name: 'Hello',
  component: Hello
}, { //新闻列表专题
  path: '/news', name: 'News', component: NewsBase,
  children: [{
    path: '',
    component: News
  },{
    path: ':id',
    name: 'news-detail',
    component: NewsDetail
  }]
}]
