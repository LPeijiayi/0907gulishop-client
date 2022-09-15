<template>
    <div>
        <!-- 使用组件 -->
        <Header></Header>
        <router-view></router-view>
        <!-- 这样写也可以但是当不显示footer的组件比较多时，不建议用，会写很长，此时用meta -->
        <!-- <Footer v-show="$route.path !== '/login' && $route.path !== '/register'"></Footer> -->
        <Footer v-show="!$route.meta.isHidden"></Footer>
    </div>
</template>

<script>
//注册
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: 'App',
    //非路由组件的注册，必须注册
    components:{
        Header,
        Footer
    }
}
</script>

<style scoped>

</style>
