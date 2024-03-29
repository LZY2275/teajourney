import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue';
import * as echarts from 'echarts'; //引入echarts
import $ from 'jquery';


window.jQuery = $
window.$ = $

// 引入组件库的少量全局样式变量
import 'tdesign-vue/es/style/index.css';
import './assets/css/theme.css';

// import './assets/css/fy.css'

Vue.use(TDesign);

Vue.config.productionTip = false

//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
