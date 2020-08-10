import 'normalize.css'
import Vue from 'vue'
import App from './App'
import './style/buefy-custom.sass'
import Buefy from 'buefy'
import './helpers/registerServiceWorker'
import '@mdi/font/css/materialdesignicons.css'
import 'regenerator-runtime/runtime'
import router from './router'
import store from './store'

Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
