const host = 'http://127.0.0.1:7001'
export default {
    log(val) {
        console.log(val)
    },
    api(url, data, callback) {
        mpvue.request({
            url: host + url,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                callback(res.data)
            },
            fail(res) {
                mpvue.showToast({
                    title: "网络请求失败",
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    }
}