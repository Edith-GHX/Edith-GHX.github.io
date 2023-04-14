import Vue from 'vue'
import VueRouter from 'vue-router'

let Home = () => import('../components/Home');
let Contact = () => import('../components/Contact');
let Team = () => import('../components/Team');
let News = () => import('../components/News');
let Search = () => import('../components/Search.vue');
let MIS = () => import('../components/Search/MIS.vue');
let DD = () => import('../components/Search/DD.vue');
let OD = () => import('../components/Search/OD.vue');

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/Contact',
      component: Contact,
    },
    {
      path: '/Team',
      component: Team,
    },
    {
      path: '/News',
      component: News,
    },
    {
      path: '/Search',
      component: Search,
    },
    {
      path: '/Search/MIS',
      component: MIS,
    },
    {
      path: '/Search/DD',
      component: DD,
    },
    {
      path: '/Search/OD',
      component: OD,
    },
  ]
});


export default router