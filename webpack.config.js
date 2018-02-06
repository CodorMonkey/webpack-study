const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    overlay: true,
    // 完全开启HMR
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 精简输出的js
    // 1.压缩代码
    // 2.不会引入未使用的代码（前提：必须使用ES2015语法）
    new UglifyjsWebpackPlugin(),
    // 完全开启HMR必须同时使用此Plugin
    new webpack.HotModuleReplacementPlugin(),
    // 清理dist目录
    new CleanWebpackPlugin(['dist']),
    // html模板插件
    new HtmlWebpackPlugin({
      title: 'index',
      template: './index.html'
    })
  ]
}
