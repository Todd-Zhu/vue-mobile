import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueRouter from 'vue-router';
import axios from "axios";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.use(VueRouter);
Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:3001";
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
