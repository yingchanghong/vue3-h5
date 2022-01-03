const { domain } = require('./src/config/env.ts');
module.exports = {
  // 打包后静态资源目录
  publicPath: './',
  // 打包不生成map后缀文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/apiDomain': {
        target: domain,
        pathRewrite: {
          '^/apiDomain': '',
        },
      },
    },
  },
};
