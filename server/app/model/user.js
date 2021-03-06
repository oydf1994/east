module.exports = app => {
    const user = app.model.define('user', {
        nickName: {
            type: app.Sequelize.STRING,
            comment: "用户昵称"
        },
        province: {
            type: app.Sequelize.STRING,
            comment: "用户地区"
        },
        avatarUrl: {
            type: app.Sequelize.STRING,
            comment: "用户头像"
        },
        city: {
            type: app.Sequelize.STRING,
            comment: "用户城市"
        },
        country: {
            type: app.Sequelize.STRING,
            comment: "用户国家"
        },
        gender: {
            type: app.Sequelize.STRING,
            comment: "用户性别"
        },
        language: {
            type: app.Sequelize.STRING,
            comment: "用户语言"
        },
        goodsId: {
            type: app.Sequelize.STRING,
            get() {
                return this.getDataValue('goodsId') ? this.getDataValue('goodsId').split(',') : this.getDataValue('goodsId');
            },
            set(val) {
                this.setDataValue('goodsId', val.join(','));
            }
        }
    });
    return user;
}