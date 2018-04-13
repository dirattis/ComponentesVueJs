import Vue from 'vue'
import App from './App.vue'
import BootStrapVue from 'bootstrap-vue'
import Table from './components/shared/table/Table.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootStrapVue);
Vue.component('app-table',Table);

new Vue({
  el: '#app',
  render: h => h(App)
})
