// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Mint from 'mint-ui'

import './scss/main.scss'
import 'lib-flexible/flexible'

import * as filters from './utils/filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key])) //注册过滤器

Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
