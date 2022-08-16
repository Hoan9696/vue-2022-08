import { createRouter, createWebHistory } from 'vue-router'

import LoginAdmin from '../admin/user/LoginAdmin.vue';

const routes = [
  {
    path: '/login',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router