<template>
    <div id="app">
        <!-- 使用组件 -->
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
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
