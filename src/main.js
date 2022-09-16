import Vue from 'vue'
import App from '@/App'
import router from '@/router'

import TypeNav from '@/components/TypeNav'
//全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在components，注册在全局（main.js）
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

// new Vue ({
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el:'#app',
  render:h =>h(App),
  router//这样我们的组件内部都可以使用this.$router(管理路由器)，this.$route(管理当前路由)）
})