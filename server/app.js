'use strict';
module.exports = app => {
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        // await app.model.sync({
        //     alter: true
        //     // force: true
        // });
    });
};
// https://mobile.yangkeduo.com/proxy/api/api/tesla/query?list_id=goods_detail_cEbwpd&app_name=goods_detail&goods_id=26295896874&page=1&show_tags=1&pdduid=4244221449012
// 相关商品推荐接口