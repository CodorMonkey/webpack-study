const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    // 清理dist目录
    new CleanWebpackPlugin(['dist']),
    // 精简输出的js
    // 1.压缩代码
    // 2.不会引入未使用的代码（前提：必须使用ES2015语法）
    new UglifyjsPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
})
