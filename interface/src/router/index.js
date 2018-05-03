import Vue from 'vue'
import Router from 'vue-router'

// //for lazy loads
//const Main = resolve => require(['../components/pages/Main.vue'], resolve)
// const Dashboard = resolve => require(['@/components/dash/Dashboard'], resolve)


const AsyncRoute = name => resolve => ({
  component: System.import(`../components/${name}.vue`)
});


//specific, contact, teacher, terms, events, user,
//TO ERIC
//PAGES TO DEVELOP CAN BE ACCESSED FROM
/*
    1) http://localhost:8080/terms   ---> make the terms of service
    2) http://localhost:8080/teacherProfile    ---> the layour for teachers profile
    3) http://localhost:8080/Contact   ---> contact us page
    4) http://localhost:8080/course-specific  ---> this is the page when a user presses on the course itself from "Courses"
    5) http://localhost:8080/userProfile  ---> user profile, must be able to edit data, like email DOB, name etc.

google Bulma or buefy to make the layout.

Good luck :)    

*/

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Introduction',
      component: AsyncRoute('pages/Main')
    },
    {
      path: '/events',
      name: 'events',
      component: AsyncRoute('pages/Events')
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: AsyncRoute('pages/User')
    },
    {
      path: '/courses',
      name: 'Courses',
      component: AsyncRoute('pages/Courses')
    },
    {
      path: '/course-specific',
      name: 'specific',
      component: AsyncRoute('pages/Specific')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: AsyncRoute('pages/Contact')
    },
    {
      path: '/teacherProfile',
      name: 'teachProfile',
      component: AsyncRoute('pages/Teacher')
    },
    {
      path: '/terms',
      name: 'terms',
      component: AsyncRoute('pages/Terms')
    },
    {
      path: '/about',
      name: 'About',
      component: AsyncRoute('pages/About_us')
    },
    {
      path: '/getTutor',
      name: 'getTutor',
      component: AsyncRoute('pages/Get_tutor')
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
