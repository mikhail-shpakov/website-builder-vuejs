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

import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

const moment = require('moment')
require('moment/locale/ru')

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
  defaultTooltipType: 'is-dark',
  defaultTooltipAnimated: true
})
Vue.use(require('vue-moment'), { moment })

Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
