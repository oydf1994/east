module.exports = app => {
    const admin = app.model.define('admin', {
        name: {
            type: app.Sequelize.STRING
        },
        password: {
            type: app.Sequelize.STRING(32)
        }
    });
    return admin;
}