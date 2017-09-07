import Hello from '@/components/Hello'
import News from '../page/news/index'

export default [{
  path: '/',
  name: 'Hello',
  component: Hello
}, {
  path: '/news', name: 'News', component: News
}]
