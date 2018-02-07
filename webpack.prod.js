const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  plugins: [
    // 精简输出的js
    // 1.压缩代码
    // 2.不会引入未使用的代码（前提：必须使用ES2015语法）
    new UglifyjsWebpackPlugin()
  ]
})
