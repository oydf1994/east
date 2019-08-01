'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/upload', controller.upload.index);

  // user
  router.post('/user/add', controller.user.add);
  router.get('/user/query', controller.user.query);

  // goods
  router.post('/goods/add', controller.goods.add); // 添加商品
  router.get('/goods/list', controller.goods.list); // 获取商品列表
  router.get('/goods/del', controller.goods.del); // 删除商品信息
};
