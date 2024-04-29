// dependencies
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  // mode
  mode: 'development',

  // development tools
  devtool: 'inline-source-map',
//   watch: "webpack --watch",

  // server connection configuration
  devServer: {
    static: './dist',
  },

  // web server connection that will use live reloading
  devServer: {
    static: '../../dist',
    hot: true,
    port: 8080,
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:4000',
      },
    ],
  },
});