import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News";
import Message from "../pages/Message.vue";
import MessageDetail from "../pages/MessageDetail";


export default [
  {
    path: '/path',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            name: 'detail',
            path: '/home/message/detail/:id',
            props: route => ({id: route.params.id}),
            component: MessageDetail
          }
        ]
      },
      {
        path: '',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/',
    redirect: '/about'
  }
]