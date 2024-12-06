import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/home';
import PersonalInfo from '@/pages/PersonalInfo';
import BookInfo from '@/pages/BookInfo';
import BorrowInfo from '@/pages/BorrowInfo';
import BorrowStatus from '@/pages/BorrowStatus';
import PersonalMima from '@/pages/BorrowStatus';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/personal-info',
    name: 'PersonalInfo',
    component: PersonalInfo
  },
  {
    path: '/personal-mima',
    name: 'PersonalMima',
    component: PersonalMima
  },
  {
    path: '/book-info',
    name: 'BookInfo',
    component: BookInfo
  },
  {
    path: '/borrow-info',
    name: 'BorrowInfo',
    component: BorrowInfo
  },
  {
    path: '/borrow-status',
    name: 'BorrowStatus',
    component: BorrowStatus
  }
];

const router = createRouter({
  history: createWebHistory(),// 使用HTML5历史模式来管理路由
  routes// 路由配置，定义所有的路由规则
});

export default router;
