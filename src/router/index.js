import Vue from 'vue';
import Router from 'vue-router';

import Todo from '@/components/Todo';
import Settings from '@/components/Settings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
  ],
});
