const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    overlay: true,
    // 完全开启HMR
    hot: true,
    compress: true
  },
  plugins: [
    // 完全开启HMR必须同时使用此Plugin
    new webpack.HotModuleReplacementPlugin(),
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
    new webpack.NamedModulesPlugin()
  ]
})
