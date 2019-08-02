'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const res = await this.ctx.curl('https://youhui.pinduoduo.com/network/api/goods/queryByGoodsId', {  // pc 商品详情
    //   method: 'POST',
    //   contentType: 'json',
    //   data: {
    //     goodsIds: ["13893788683"]
    //   },
    //   dataType: 'json'
    // })
    // const res = await this.ctx.curl('https://jinbao.pinduoduo.com/network/api/common/goodsList', {  // pc 商品列表
    //   method: 'POST',
    //   contentType: 'json',
    //   data: {
    //     categoryId: -11,
    //     crawlerInfo: "0anAfxnpUOGoY9ERG1OA0s7x4GABZVppDevaiPFQ1cskBsAKnOH5BaADvfi5IbfRxRLHgWP9oqXXoXdol9jCRdYugqO4HnidHESs79oLGXZJsO6LP1I4PI5ytRxCoHGYhHT1cnsN1a_hYSRDqavQMU78mu2i9XazguBcuylQjB_apK43W627dbKmGKN_7KuaYc-t_c3Y5zgN2gJwGv9tbTg-n2KkAYvfoaTT5valmrd4SPOQfNqFoJTzchu52xvgkkkGNBYP9utMdaqEbw64cDzo_8scecOZho3aoLa4f0D9q2VMChz2cQr5qz4Ljmwt7n1D_Sot8fJ8q3YHsaOnGJT7cIIP86J_eGO48nSgzFffD070apCuKgWq7SSgQwAHRNIbTUiq_RAJLf7t7N0qDWhSFsyurAeKheZBqpi3WDHdF7bDRphaiNm9U",
    //     pageNumber: 1,
    //     pageSize: 60
    //   },
    //   dataType: 'json'
    // })
    this.ctx.body = res
  }
}

module.exports = HomeController;