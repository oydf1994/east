'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async add() {
        try {
            const res = await this.app.model.User.create(this.ctx.request.body)
            this.ctx.helper.success(this.ctx, res)
        } catch (e) {
            this.ctx.helper.error(this.ctx, 401, '请检查输入项')
        }
    }
    async query() {
        try {
            console.log()
            const res = await this.app.model.User.findAll({
                where: {
                    id: {
                        [this.app.Sequelize.Op.in]: [1, 2]
                    }
                }
            })
            this.ctx.helper.success(this.ctx, res)
        } catch (e) {
            console.log(e)
            this.ctx.helper.error(this.ctx, 401, '请检查输入项')
        }
    }
}

module.exports = UserController;
