import Vue from 'vue'
import App from '@/App'
import router from '@/router'
Vue.config.productionTip = false

// new Vue ({
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el:'#app',
  render:h =>h(App),
  router//这样我们的组件内部都可以使用this.$router(管理路由器)，this.$route(管理当前路由)）
})