<template>
    <div class="nav-bar">
        <div class="nav-bar-item" v-for="(item, index) in itemTitle" :key="item.id"
             :class="{active:index === currentIndex}"
             @mouseenter="mouseenter(index)" @mouseleave="mouseleave" @click="clickItem(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        components: {},
        data() {
            return {
                itemTitle: ['首页', '资源', '博文', '捐赠'],
                currentIndex: -1,
            }
        },
        methods: {
            mouseenter(index) {
                this.currentIndex = index;
            },
            mouseleave() {
                this.currentIndex = -1;
            },
            clickItem(index) {
                switch (index) {
                    case 0:
                        this.$router.push('/home').then(err => err);
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        this.$router.push('/donate').then(err => err);
                }
            },
        }
    }
</script>

<style scoped>
    .nav-bar {
        background: var(--content-color);
        text-align: center;
        display: flex;
        border-top: 3px solid var(--border-color);
        border-bottom: 3px solid var(--border-color);
    }

    .nav-bar-item {
        width: 200px;
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        color: var(--font-color);
    }

    .active {
        background-color: var(--touch-color);
        cursor: pointer;
    }
</style>