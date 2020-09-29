/** @type {import('webpack').Configuration} */
// import('webpack').Configuration
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    app: './src/math_index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    namedModules: true
  },
  devServer: {
    contentBase: './dist', // 静态资源目录
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff$/,
        use: ['file-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader']
      }
    ]
  }
}