import {request} from './request'

export function getCategories() {
    return request({
        url: '/blogCategory/findAllCategory',
    })
}

export function getBlogPosts(cId, page) {
    return request({
        url: '/blogPost/findPostByCategory?cId=' + (cId + 1) + '&page=' + page,
    })
}

export function getBlogPostsByCategoryCount(cId) {
    return request({
        url: '/blogPost/findPostByCategoryCount?cId=' + (cId + 1),
    })
}
