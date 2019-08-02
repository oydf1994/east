module.exports = app => {
    const goods = app.model.define('goods', {
        name: {
            type: app.Sequelize.STRING,
            comment: '商品名称'
        },
        type: {
            type: app.Sequelize.INTEGER,
            comment: '开奖模式 1.定时开奖 2.人数开奖',
            get() {
                return this.getDataValue('type') == 1 ? '定时开奖' : '人数开奖';
            },
        },
        lottery: {
            type: app.Sequelize.STRING,
            comment: '开奖时间 如果开奖模式为1 则添加开奖时间'
        },
        currentPeople: {
            type: app.Sequelize.STRING,
            comment: '已参加人数'
        },
        initPeople: {
            type: app.Sequelize.STRING,
            comment: '项目初始化人数'
        },
        people: {
            type: app.Sequelize.STRING,
            comment: '开奖人数 如果开奖模式为2 则设置多少人时开奖'
        },
        timing: {
            type: app.Sequelize.STRING,
            comment: '定时发布'
        },
        out: {
            type: app.Sequelize.BOOLEAN,
            defaultValue: false,
            comment: '是否下架'
        },
        banner: {
            type: app.Sequelize.STRING(100000),
            comment: '商品banner图储存文件地址',
            get() {
                return this.getDataValue('banner').split(',');
            },
            set(val) {
                this.setDataValue('banner', val.join(','));
            }
        },
        details: {
            type: app.Sequelize.STRING(100000),
            comment: '商品详情图储存文件地址',
            get() {
                return this.getDataValue('details').split(',');
            },
            set(val) {
                this.setDataValue('details', val.join(','));
            }
        },
        price: {
            type: app.Sequelize.FLOAT,
            comment: '商品价格'
        },
        status: {
            type: app.Sequelize.STRING,
            comment: '上架状态 0 全部 1 未上架 2 上架中  3 已下架',
            get() {
                var timestamp = Date.parse(new Date());
                if (this.getDataValue('type') == 1) {
                    return timestamp > this.getDataValue('timing') ? '已发布' : '未上架'
                } else {
                    return timestamp > this.getDataValue('timing') ? '已发布' : '未上架'
                }
            }
        },
        winning: {
            type: app.Sequelize.INTEGER,
            comment: '指定中奖人员'
        }
    });
    return goods;
}