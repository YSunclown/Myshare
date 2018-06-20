import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import base from '../views/base';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: r => require.ensure([], () => r(require('../components/HelloWorld')), 'login'),
      meta: {
        title: 'my Blog'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: r => require.ensure([], () => r(require('../components/help')), 'help'),
      meta: {
        title: 'help'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: r => require.ensure([], () => r(require('../components/register')), 'register'),
      meta: {
        title: 'register'
      }
    },
    {
      path: '/base',
      component: base,
      children: [{
        path: '/home',
        name: 'home',
        component: r => require.ensure([], () => r(require('../components/Home/Home')), 'home'),  
        
      },
      {
        path: '/diary',
        name: 'diary',
        component: r => require.ensure([], () => r(require('../components/diary/diary')), 'diary'),  
        
      },
      {
        path: '/travel',
        name: 'travel',
        component: r => require.ensure([], () => r(require('../components/travel/travel')), 'travel'),  
        
      },
      {
        path: '/source',
        name: 'source',
        component: r => require.ensure([], () => r(require('../components/source/source')), 'source'),  
        
      },
      {
        path: '/count',
        name: 'count',
        component: r => require.ensure([], () => r(require('../components/count/count')), 'count'),  
        
      }
    
    ]
    },

  ]
})
