import Vue from 'vue'
import Router from 'vue-router'

// //for lazy loads
//const Main = resolve => require(['../components/pages/Main.vue'], resolve)
// const Dashboard = resolve => require(['@/components/dash/Dashboard'], resolve)


const AsyncRoute = name => resolve => ({
  component: System.import(`../components/${name}.vue`)
});





Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Introduction',
      component: AsyncRoute('pages/Main')
    },
    {
      path: '/courses',
      name: 'Courses',
      component: AsyncRoute('pages/Courses')
    },
    {
      path: '/about',
      name: 'About',
      component: AsyncRoute('pages/About_us')
    },
    {
      path: '/becomeTutor',
      name: 'Become',
      component: AsyncRoute('pages/Become_tutor')
    }
    // {
    //   path: '/dashboard',
    //   name: "Dashboard",
    //   component: Dashboard,
    //   children: [{
    //       path: 'unit/:unitCode',
    //       component: AsyncRoute('dash/UnitDash'),
    //       name: 'Unit'
    //     }]
    // }


  ]
})
