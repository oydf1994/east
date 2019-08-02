module.exports = app => {
    const goodsList = app.model.define('goodsList', {
        goodsId: {
            type: app.Sequelize.STRING
        },
        goodsName: {
            type: app.Sequelize.STRING,
            comment: '商品名称'
        },
        goodsPic: {
            type: app.Sequelize.STRING
        },
        optId: {
            type: app.Sequelize.STRING
        },
        optName: {
            type: app.Sequelize.STRING
        },
        imgUrl: {
            type: app.Sequelize.STRING
        }
    });
    return goodsList;
}