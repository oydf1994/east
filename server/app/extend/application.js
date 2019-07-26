'use strict'

module.exports = {
    /**
     * 生成jwt
     * @param {Int} id 用户id
     * @param {String} username 用户名
     * @param {String} role 权限
     */
    generateJWT(param) {
        const token = this.jwt.sign(param, this.config.jwt.secret, {
            expiresIn: '2h'
        })
        return token
    },

    /**
     * 验证jwt
     * @param {Object} ctx 传入的请求体
     */
    verifyToken(ctx) {
        const { config } = this
        const token = ctx.headers.token
        if (!token) return null
        try {
            return this.jwt.verify(token, config.jwt.secret)
        } catch (err) {
            return false
        }
    }
}