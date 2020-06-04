<template>
    <div id="home">
        <sidebar></sidebar>
        <blog-title-list></blog-title-list>
    </div>
</template>

<script>
    import Sidebar from '@/components/common/sidebar/Sidebar'
    import BlogTitleList from './childcomps/BlogTitleList'

    export default {
        name: "Home",
        components: {
            Sidebar,
            BlogTitleList,
        },
        methods: {}
    }
</script>

<style scoped>
    #home {
        height: 800px;
        width: 100%;
        position: relative;
    }

</style>