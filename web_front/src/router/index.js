import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import Document from "../components/Document";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainView
    },
    {
      path: '/document',
      component: Document
    },
  ]
})
