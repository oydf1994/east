module.exports = {
    assetsDir: 'static',
    outputDir: "../egg-server/app/public/view",
    publicPath: "./public/view",
    productionSourceMap: false,
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
}