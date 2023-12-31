const cracoLess = require('craco-less')
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugin: [{ plugin: cracoLess }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}