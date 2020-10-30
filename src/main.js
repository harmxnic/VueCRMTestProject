import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from "./filters/currency.filter"
import messagePlugin from '@/common/message.plugin'
import Loader from "./components/app/Loader"

import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyCeIWlvcey1F-8p-XJCwx1bDEjepdTPJFU',
  authDomain: 'vue-practice-crm-4slf.firebaseapp.com',
  databaseURL: 'https://vue-practice-crm-4slf.firebaseio.com',
  projectId: 'vue-practice-crm-4slf',
  storageBucket: 'vue-practice-crm-4slf.appspot.com',
  messagingSenderId: '748912033308',
  appId: '1:748912033308:web:fb52ecf0f7d911e261a9d9',
  measurementId: 'G-F53HM9S497'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
