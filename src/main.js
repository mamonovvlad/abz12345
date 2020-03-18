import Vue from 'vue'
import App from './App.vue'
import Retina from 'retinajs'
import Vuelidate from 'vuelidate'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import VueScrollTo from 'vue-scrollto'



Vue.use(VueScrollTo)
Vue.use(PerfectScrollbar)
Vue.use(Vuelidate)
Vue.use(Retina)
Vue.config.productionTip = false


Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')