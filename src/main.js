import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import axios from 'axios'

import routes from './routes/routes'
import 'vuetify/dist/vuetify.css'

Vue.use(VueRouter)
//Vue.use(Vuetify)
Vue.use(Vuetify, {
  theme: {
    primary: '#1867C0',
    secondary: '#5CBBF6',
    tertiary: '#E57373',
    accent: '#005CAF'
  }
})

// configure router
const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
    el: '#app',
    mounted () {
      window.axios = axios
    },
    render: a => a(App),
    router
})