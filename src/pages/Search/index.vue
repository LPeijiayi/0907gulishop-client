<template>
    <div>
        <!-- Search <br> -->
        <!-- params:{{$route.params.keyword}}  --------{{keyword}} -->
        <!-- 简化版 -->
        <!-- <br> -->
        <!-- query:{{$route.query.keyword1}} --------{{keyword1}} -->
        <TypeNav></TypeNav>
    </div>
</template>

<script>
import TypeNav from '@/components/TypeNav/index.vue';
export default {
    name: "Search",
    props: ["keyword", "keyword1"],
    components: { TypeNav }
}
</script>

<style scoped>

</style>
