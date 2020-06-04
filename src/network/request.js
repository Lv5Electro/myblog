import axios from 'axios'


export function request(config) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://39.99.198.179:80',
        timeout: 5000
    });
    // 配置请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    });
    // 配置响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    });
    return instance(config)

}