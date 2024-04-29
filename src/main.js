import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue';
import * as echarts from 'echarts'; //引入echarts
import $ from 'jquery';
import i18n from './lang/index.js';


window.jQuery = $
window.$ = $


// 引入组件库的少量全局样式变量
import 'tdesign-vue/es/style/index.css';
import './assets/css/theme.css';
import VueTypedJs from 'vue-typed-js';
const VueScrollTo = require('vue-scrollto')

import 'animate.css';

Vue.use(VueTypedJs);
// import './assets/css/fy.css'

Vue.use(TDesign);

Vue.config.productionTip = false

//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts

Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
