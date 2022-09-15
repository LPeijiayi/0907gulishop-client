import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//将原有的push方法地址，保存起来，后期还能拿到原来的
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
//可以大胆的去修改原型的push,让原型的push指向另外一个函数
VueRouter.prototype.push = function(location,onResolved,onRejected){
    //location 就是我们调用this.$router.push 传递过来的对象
    /* {
        name: "search",
        params: { keyword: this.keyword || undefined },
        query: { keyword1: this.keyword.toUpperCase() },
    }; */
    if(onResolved === undefined && onRejected === undefined){
        //证明调用的时候只传递个匹配路由对象，没有传递成功或者失败的回调
        return originPush.call (this,location).catch(() => {})
    }else{
        return originPush.call(this,location,onResolved,onRejected)
    }
} 

VueRouter.prototype.replace = function(location,onResolved,onRejected){
    //location 就是我们调用this.$router.replace 传递过来的对象
    /* {
        name: "search",
        params: { keyword: this.keyword || undefined },
        query: { keyword1: this.keyword.toUpperCase() },
    }; */
    if(onResolved === undefined && onRejected === undefined){
        //证明调用的时候只传递个匹配路由对象，没有传递成功或者失败的回调
        return originReplace.call (this,location).catch(() => {})
    }else{
        return originReplace.call(this,location,onResolved,onRejected)
    }
} 

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            // 路由对象当中的元配置项，可以配置我们所需要的任何数据
            meta:{
                isHidden:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search',
            // props: //这个props是我们在路由组建当中操作params参数和query参数的简化方法
            // props:true, //会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
            // props:{username:'zhaoliying'}  //传递一个对象，传递的是额外你需要的静态数据,不需要就不用
            props:(route) => {
                return {keyword:route.params.keyword,keyword1:route.query.keyword1}
            }
        },
        
        // 重定向
        {
            path:'/',
            redirect:'/home'
        }
    ]
})