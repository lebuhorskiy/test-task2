import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.config.productionTip = false
Vue.use(VueAxios, axios);


new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
