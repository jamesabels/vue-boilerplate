import Vue from 'vue'
import VueRouter from 'vue-router'

// Import components
import App from './App'
import Error from './components/404'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/404', component: Error}
]

const router = new VueRouter({routes})

new Vue({
  router
}).$mount('#app')
