import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import ProjectInformation from '@/components/contents/ProjectInformation'
import ResearchProposal from '@/components/contents/ResearchProposal'
import Milestone1 from '@/components/contents/Milestone1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/project/info'
    },
    {
      path: '/project',
      name: 'MainView',
      component: MainView,
      children: [
        {
          path: '/project/info',
          name: 'ProjectInformation',
          component: ProjectInformation
        },
        {
          path: '/project/rp',
          name: 'ResearchProposal',
          component: ResearchProposal
        },
        {
          path: '/project/ms1',
          name: 'Milestone1',
          component: Milestone1
        },
      ]
    }
  ]
})
