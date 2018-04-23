import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  //data to store
  state: {
    user: {
      token: null,
      isLogged: false,
      username: null,
      email: null,
      bookedSessions: [],
    }
  }


})
