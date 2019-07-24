import Vue from 'vue'
import App from './App'
import tools from './utils/tools'
Vue.prototype.$tools = tools;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
