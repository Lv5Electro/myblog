export default {
    initBlogCategories(state, blogCategories){
        state.blogCategories = blogCategories;
    },
    initBlogPosts(state, initBlogPosts){
        state.blogPosts = initBlogPosts;
    },
    getPostCategoryIndex(state, index){
        state.blogCategoryIndex = index;
    },
    getPageCounts(state, pageCounts){
        state.pageCounts = pageCounts
    }
}