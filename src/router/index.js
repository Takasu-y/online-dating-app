import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import userList from '../views/pages/user-list.vue'
import messageList from '../views/pages/message-list.vue'
import chat from '../views/pages/chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/online-dating-app',
    name: 'home',
    component: Home
  },
  {
    path: '/user-list',
    name: 'userList',
    component: userList
  },
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
