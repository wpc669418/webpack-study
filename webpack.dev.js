const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

console.log('__dirname', path.join(__dirname, 'dist'))


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, //一切服务都启用gzip 压缩
    port: 9000
  },
})