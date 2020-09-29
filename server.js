const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = new express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, function () {
  console.log('listeng on port 3000!\n')
})