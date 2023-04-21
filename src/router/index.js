import Vue from 'vue'
import VueRouter from 'vue-router'

let Home = () => import('../components/Home');
let Contact = () => import('../components/Contact');
let Team = () => import('../components/Team');
let News = () => import('../components/News');
let Results = () => import('../components/Results');
let Research = () => import('../components/Research.vue');
let MIS = () => import('../components/MIS.vue');
let DD = () => import('../components/DD.vue');
let OD = () => import('../components/OD.vue');
let EnMain = () => import('../components/EnMain/home.vue');
let EnTeam = () => import('../components/EnMain/team.vue');
let EnResults = () => import('../components/EnMain/results.vue');
let EnResearch = () => import('../components/EnMain/research.vue');
let EnNews = () => import('../components/EnMain/news.vue');
let EnContact = () => import('../components/EnMain/contact.vue');
let EnMIS = () => import('../components/EnMain/MIS.vue');
let EnDD = () => import('../components/EnMain/DD.vue');
let EnOD = () => import('../components/EnMain/OD.vue');

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
      path: '/Results',
      component: Results,
    },
    {
      path: '/Research',
      component: Research,
    },
    {
      path: '/Research/MIS',
      component: MIS,
    },
    {
      path: '/Research/DD',
      component: DD,
    },
    {
      path: '/Research/OD',
      component: OD,
    },
    {
      path: '/en',
      component: EnMain,
    },
    {
      path: '/en/team',
      component: EnTeam,
    },
    {
      path: '/en/news',
      component: EnNews,
    },
    {
      path: '/en/research',
      component: EnResearch,
    },
    {
      path: '/en/results',
      component: EnResults,
    },
    {
      path: '/en/contact',
      component: EnContact,
    },
    {
      path: '/en/research/MIS',
      component: EnMIS,
    },
    {
      path: '/en/research/DD',
      component: EnDD,
    },
    {
      path: '/en/research/OD',
      component: EnOD,
    },
  ]
});


export default router