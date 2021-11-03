import Vue from 'vue'
import VueRouter from 'vue-router'
import userList from '../views/pages/user-list.vue'
// import userDetail from '../views/pages/user-detail.vue'
import messageList from '../views/pages/message-list.vue'
import chat from '../views/pages/chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userList',
    component: userList
  },
  // {
  //   path: '/user/:id',
  //   name: 'user',
  //   component: userDetail
  // },
  {
    path: '/user/:id/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/message-list',
    name: 'message-list',
    component: messageList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
