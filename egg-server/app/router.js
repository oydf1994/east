'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/upload', controller.upload.index);
  router.post('/user/add', controller.user.add);
  router.post('/goods/add', controller.goods.add); // 添加商品
  router.get('/goods/query', controller.goods.query); // 查询商品信息
  router.get('/goods/list', controller.goods.list); // 获取商品列表
  router.get('/goods/del', controller.goods.del); // 删除商品信息
};
