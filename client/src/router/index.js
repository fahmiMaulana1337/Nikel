import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import TableRent from '../components/TableRent.vue'
import TableVehicle from '../components/TableVehicle.vue'
import AddVehicle from '../views/AddVehicle.vue';
import EditVehicle from '../views/EditVehicle.vue';
import AddRequest from '../views/AddRequest.vue';
import Dashboard from '../views/Dashboard.vue';
import Log from '../components/TableLog.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/rent',
      component:TableRent
    },
    {
      path: '/vehicle',
      component:TableVehicle
    },
    {
      path: '/addVehicle',
      component:  AddVehicle
    },
    {
      path: '/editVehicle/:id',
      component:  EditVehicle
    },
    {
      path: '/addRequest',
      component: AddRequest
    },
    {
      path: '/',
      component:Dashboard
    },
    {
      path:'/log',
      component:Log
    }
  ]
})
router.beforeEach((to,_,next)=>{
  const isLogin = !!localStorage.getItem('access_token');
  if(isLogin && to.path === '/login'){
    next('/')
  } else if(!isLogin && to.path ==='/'){
    next('/login')
  }
   else{
    next()
  }
})

export default router
