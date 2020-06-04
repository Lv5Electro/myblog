import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogCategories: [],
        blogPosts: [],
        blogCategoryIndex: 0,
        pageCounts: [1],
    },
    getters: {},
    mutations: mutations,
    actions: {},
    modules: {}
})
