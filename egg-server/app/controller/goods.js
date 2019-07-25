'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
    async add() {
        const {
            ctx
        } = this;
        try {
            const res = await this.app.model.Goods.create(ctx.request.body)
            ctx.helper.success(ctx, res)
        } catch (e) {
            ctx.helper.error(ctx, 401, '请检查输入项')
        }
    }
    async list() {
        try {
            const list = await this.app.model.Goods.findAll()
            this.ctx.helper.success(this.ctx, list)
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
}

module.exports = GoodsController;