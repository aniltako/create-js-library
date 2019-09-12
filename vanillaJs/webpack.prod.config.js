const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
    entry : {
      index: './src/lib/index.js',
    },
    output : {
      libraryTarget: 'umd',
      library: 'simple-react-pagination-js',
    },
    devtool: false,
    mode:'production',
    module : {
      rules : [
          {test : /\.(js)$/, use:'script-loader'}
      ]
  }
})