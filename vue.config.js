const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('pages', resolve('src/pages'))
      .set('utils', resolve('src/utils'))
      .set('apis', resolve('src/api'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}



// module.exports = {
//     // pages,多页面配置
//     configureWebpack: {
//         resolve: {
//             extensions:['.js','.css','.vue','.less'],
//             alias: {
//                 'assets': '@/assets',
//                 'components': '@/components',
//                 'common': '@/common',
//                 'pages': '@/pages',
//                 'utils': '@/utils',
//             }
//         }
//     }
// }