import axios from 'axios'
import qs from 'qs' // 直接post请求后台取不到参数,()
import bus from '../../components/common/bus';
import {
    Notification,
    MessageBox
} from 'element-ui'
import host from './host'
// axios.interceptors.request.header('Access-Control-Allow-Headers', 'Content-Type', 'Content-Length', 'Authorization', 'Accept', 'X-Requested-With', 'yourHeaderFeild');
// 发起请求时,会执行该方法
axios.interceptors.request.use(config => {
    // bus.$emit("loading", true);
    //你可以在这里开始加载动画,  查询token  等等之类
    return config
}, err => {
    return Promise.reject(err)
})
//接收到后台的数据时执行的方法
// axios.interceptors.response.use(response => {
//     bus.$emit("loading", false);
// }, err => Promise.resolve(err))
//检查状态码 status
function checkStatus(res) {
    if (res.status == 200) {
        return res.data.data
    } else {
        Notification.error({
            title: '错误',
            message: res.data.message || '未知异常'
        })
        return false // 状态不正常时可以返回自己自定义的一些格式或者状态什么的
    }
}


export default {
    error(message) {
        Notification.error({
            title: '错误',
            message: (message || '未知异常')
        })
    },
    warning(message) {
        Notification.warning({
            title: '温馨提示',
            message: (message || '未知异常')
        })
    },

    file(url, data) {
        if (!url) return
        return axios({
            method: 'post',
            url,
            data,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            timeout: 10000
        }).then(checkStatus).catch(res => {
            Notification.error({
                title: '错误',
                message: res
            })
            return false
        })
    },
    success(message) {
        Notification.success({
            title: '成功',
            message: (message || '操作成功')
        });
    },
    get(url, params) { //返回封装后的 get 方法
        if (!url) return
        return axios({
            method: 'get',
            url,
            params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 10000
        }).then(checkStatus).catch(res => {
            Notification.error({
                title: '错误',
                message: res.message
            })
            return false
        })
    },
    post(url, data) { //返回封装后的 post 方法
        if (!url) return
        return axios({
            method: 'post',
            url,
            data,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            timeout: 10000
        }).then(checkStatus).catch(res => {
            bus.$emit("loading", false);
            Notification.error({
                title: '错误',
                message: res
            })
            return false
        })
    }
}
