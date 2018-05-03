import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.min.css'




Vue.use(Buefy)


new Vue({
  el: '#app',
  router,
  
  store,
  render: h => h(App)
})
