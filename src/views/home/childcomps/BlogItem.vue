<template>
    <div class="blog-item">
        <slot name="item-title"></slot>
        <slot name="item-time"></slot>
    </div>
</template>

<script>
    export default {
        name: "BlogItem"
    }
</script>

<style scoped>
    .blog-item {
        border-bottom: 1px solid var(--border-color);
        margin: 0 auto;
        width: 80%;
        height: 40px;
        line-height: 40px;
        display: flex;
    }

    .blog-item span{
        text-align: right;
        flex: 1;
    }

</style>