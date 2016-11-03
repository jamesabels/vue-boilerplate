import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import HelloModule from './modules/hello_module'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    message: ''
  },
  modules: {
    hello: HelloModule
  }
})

export default Store
