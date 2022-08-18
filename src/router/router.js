import { createRouter, createWebHistory } from 'vue-router'

import LoginAdmin from '../admin/user/LoginAdmin.vue';
import RegisterAdmin from '../admin/user/RegisterAdmin.vue';

const routes = [
  {
    path: '/login',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/register',
    name: 'RegisterAdmin',
    component: RegisterAdmin
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router