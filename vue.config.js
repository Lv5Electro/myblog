// 配置代理服务器，解决跨域请求问题
// 原理如下：
// proxy接管了原本由axios发送的请求/api/blogCategory/findAllCategory变成 http://localhost:8080/api/blogCategory/findAllCategory
// 可以看到现在的请求中是多了个api的，但是由于后台并没有api
// 所以利用pathRewrite将api替换成""，也就是空

module.exports = {
    // 配置webpack-dev-server
    devServer:{
        host:"39.99.198.179",
        port:8081,
        https:false,
        // 是否自动打开网页
        open:true,
        proxy:{
            // 告诉node，只有有api开头的接口，都用此代理
            "/api":{
                target:"http://localhost:8080/",
                // target:"/blogCategory/findAllCategory",
                // 允许跨域
                changeOrigin: true,
                pathRewrite:{
                    // 由于原本的
                    '^/api':""
                }
            }
        }
    }
};