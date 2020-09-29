const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      // 打包node_modules里的代码
      chunks: 'all'
    },
    // 打包runtime代码
    runtimeChunk: true
  }
})