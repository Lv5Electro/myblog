<template>
    <div id="app">
        <my-header></my-header>
        <nav-bar></nav-bar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import MyHeader from '@/components/common/myheader/MyHeader'
    import NavBar from '@/components/common/navbar/NavBar'
    import MyFooter from '@/components/common/myfooter/MyFooter'
    import Home from './views/home/Home'
    import Donate from './views/donate/Donate'

    import {getCategories} from "./network/home";


    export default {
        name: 'App',
        components: {
            Home,
            Donate,
            MyHeader,
            NavBar,
            MyFooter,
        },
        methods: {
            getCategories() {
                getCategories().then(res => {
                    this.$store.commit('initBlogCategories', res.blogCategories);
                });
            },
        },
        created() {
            this.getCategories();
        }
    }
</script>

<style>
    @import "./assets/css/base.css";
    #app {
        background: url("./assets/img/home/body_bg.jpg") no-repeat center/110%;
    }
</style>
