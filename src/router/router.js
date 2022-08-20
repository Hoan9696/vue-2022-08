import { createRouter, createWebHistory } from 'vue-router'

import LoginAdmin from '../admin/user/LoginAdmin.vue';
import RegisterAdmin from '../admin/user/RegisterAdmin.vue';
import ChangePassword from '../admin/user/ChangePassword.vue';

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
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router