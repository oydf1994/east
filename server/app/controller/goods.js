'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
    async add() {
        const {
            ctx
        } = this;
        try {
            let arr = []
            let min = await this.app.model.User.min('id')
            let max = await this.app.model.User.max('id')
            for (let i = 0; i < ctx.request.body.initPeople; i++) {
                let num = this.ctx.helper.randomNum(min, max)
                if (arr.indexOf(num) == -1) {
                    arr.push(num)
                }
            }
            const res = await this.app.model.Goods.create(ctx.request.body)
            const initPeople = await this.app.model.User.update({
                goodsId: [res.id]
            }, {
                    where: {
                        id: {
                            [this.app.Sequelize.Op.in]: arr
                        }
                    }
                })
            ctx.helper.success(ctx, res)
        } catch (e) {
            ctx.helper.error(ctx, 401, '请检查输入项')
        }
    }
    async list() {
        try {
            const res = await this.ctx.curl('https://api.pinduoduo.com/api/jinbao/h5_weak_auth/goods/query_goods_list_by_opt_id_c', {
                method: 'POST',
                contentType: 'json',
                data: {
                    optId: 14,
                    pageNum: 1,
                    pageSize: 14,
                },
                dataType: 'json'
            })
            this.ctx.helper.success(this.ctx, res.data.result.goodsList)
        } catch (e) {
            this.ctx.helper.error(this.ctx, 401, '请重试')
        }
    }
    async del() {
        try {
            const res = await this.app.model.Goods.destroy({
                where: {
                    id: this.ctx.query.id
                }
            })
            this.ctx.helper.success(this.ctx, res)
        } catch (e) {
            this.ctx.helper.error(this.ctx, 401, '请重试')
        }
    }
    async get() {
        try {
            const res = await this.ctx.curl('https://youhui.pinduoduo.com/network/api/goods/queryByGoodsId', {  // pc 商品详情
                method: 'POST',
                contentType: 'json',
                data: {
                    goodsIds: ["13893788683"]
                },
                dataType: 'json'
            })
            this.ctx.helper.success(this.ctx, res)
        } catch (e) {
            this.ctx.helper.error(this.ctx, 401, '请重试')
        }
    }
}

module.exports = GoodsController;