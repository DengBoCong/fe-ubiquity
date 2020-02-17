// let pageMethod = require('./src/utils/getPages.js');
// pages = pageMethod.pages();
//多页面配置 && node src/utils/jsCopy.js && node src/utils/cssCopy.js && node src/utils/htmlReplace.js

module.exports = {
    // pages,多页面配置
    configureWebpack: {
        resolve: {
            extensions:['.js','.css','.vue','.less'],
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'common': '@/common',
                'pages': '@/pages',
                'network': '@/network',
            }
        }
    }
}