<template>
    <div class="donate">
        <div><img src="@/assets/img/donate/qq名片.jpg" alt=""></div>
        <div><img src="@/assets/img/donate/微信名片.jpg" alt=""></div>
    </div>
</template>

<script>
    export default {
        name: "Donate"
    }
</script>

<style scoped>
    .donate {
        height: 800px;
        display: flex;
        text-align: center;
    }
    .donate div{
        flex: 1;
    }
</style>