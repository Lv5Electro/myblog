<template>
    <div class="blog-title-list">
        <!--后面可以改成axios数据传过来-->
        <blog-item v-for="item in getBlogPosts" :key="item.id">
            <a href="" slot="item-title"><span>《{{item.pTitle}}》</span></a>
            <span slot="item-time">{{item.pTime}}</span>
        </blog-item>
        <switch-page></switch-page>
    </div>
</template>

<script>
    import BlogItem from './BlogItem'

    import SwitchPage from '@/components/common/sidebar/SwitchPage'


    export default {
        name: "BlogTitleList",
        components: {
            BlogItem,
            SwitchPage,
        },
        data() {
            return {}
        },
        computed: {
            getBlogPosts() {
                return this.$store.state.blogPosts;
            }
        },
        methods: {
        },


    }
</script>

<style scoped>
    .blog-title-list {
        position: absolute;
        padding-top: 40px;
        top: 10%;
        left: 40%;
        width: 40%;
        height: 600px;
        background: var(--content-color);
        border: 3px solid var(--border-color);
        border-radius: 20px;
        opacity: 0.88;
    }


</style>