import Vue from 'vue'
import App from './App.vue'

import {TestButton} from '../packages/index'

Vue.config.productionTip = false
Vue.use(TestButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
