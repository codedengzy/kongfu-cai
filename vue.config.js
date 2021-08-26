module.exports = {
    devServer: {
        // 本地访问host
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:4567', // API服务器的地址
                //  ws: true, // 代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin 允许跨域
                pathRewrite: { // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': 'http://localhost:4567'
                }
            }
        }
    }
}