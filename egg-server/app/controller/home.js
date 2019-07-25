'use strict';
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const tpl = path.join(__dirname, '../public/view/index.html');
    const html = new Promise(function (resolve, reject) {
      fs.readFile(tpl, 'utf-8', (err, data) => {
        resolve(data)
      });
    })
    ctx.body = await html
  }
}

module.exports = HomeController;