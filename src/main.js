import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// Подгружаем только необходимые компоненты
import Vuetify from 'vuetify/lib'

import routes from './routes/routes'

import 'vuetify/src/stylus/app.styl'

Vue.use(VueRouter)

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

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: a => a(App),
  router
})
