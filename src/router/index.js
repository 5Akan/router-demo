import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import jobDetails from '../views/jobs/jobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
     path:'/jobs/:id', //':parameter name' for new route parameter which changes 
     name:'jobDetails',
     component:jobDetails,
     props:true
    },
    //redirect
    {
      path:'/all-jobs',
      redirect:'/jobs'
    }
    // catchall 404
    ,{
      path:'/:catchAll(.*)',
      name:'NotFound',
      component: NotFound
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
