const path = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: {
    clientAppEntrypoint: ['@babel/polyfill', path.resolve(__dirname, '../src/client/clientAppEntrypoint')],
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3000/static/',
  },
  plugins: [],
};

module.exports = merge(shared, webpackConfig);