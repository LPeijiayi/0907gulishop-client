<template>
    <div>
        Search <br>
        params:{{$route.params.keyword}}  --------{{keyword}}<!-- 简化版 -->
        <br>
        query:{{$route.query.keyword1}} --------{{keyword1}}
    </div>
</template>

<script>
export default {
    name: 'Search',
    props:['keyword','keyword1']
}
</script>

<style scoped>

</style>
