export default {
    log(val) {
        console.log(val)
    },
    api(url, data, callback) {
        mpvue.request({
            url: url, //仅为示例，并非真实的接口地址
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                callback(res)
            }
        })
    }
}