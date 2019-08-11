import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
