// 处理成功响应
exports.success = (ctx, result = null, message = "请求成功", status = 200) => {
    ctx.body = {
        status: status,
        message: message,
        data: result
    };
    ctx.status = status;
};

// 处理失败响应
exports.error = (ctx, status, message) => {
    ctx.body = {
        status: status,
        message: message
    };
    ctx.status = status;
};
exports.randomNum = (Min, Max) => {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
} 