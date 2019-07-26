'use strict';
const Controller = require('egg').Controller;
const puppeteer = require('../../plug/node_modules/puppeteer');
class GoodsController extends Controller {
    async add() {
        const {
            ctx
        } = this;
        try {
            console.log(ctx.request.body)
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
    async query() {
        const {
            ctx
        } = this;
        let obj = {
            banner: [],
            details: []
        }
        try {
            const url = ctx.query.url
            const browser = await puppeteer.launch({});
            const page = await browser.newPage();
            await page.goto(url, {});
            const htmlHandle = await page.$$('.islider-outer img');
            const imgHandle = await page.$$('.goods-details img');
            const name = await page.$('.enable-select')
            obj.name = await page.evaluate(body => body.innerText, name);
            for (let i = 0; i < htmlHandle.length; i++) {
                var src = await page.evaluate(body => body.src, htmlHandle[i]);
                obj.banner.push(src)
            }
            for (let i = 0; i < imgHandle.length; i++) {
                var src = await page.evaluate(body => body.dataset.url, imgHandle[i]);
                obj.details.push(src)
            }
            await browser.close();
            ctx.helper.success(ctx, obj)
        } catch (err) {
            ctx.helper.error(ctx, 400, '请求失败,请重试')
        }
    }
}

module.exports = GoodsController;