const path = require('path');
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');
const shared = require('./webpack.shared');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'server',
  target: 'node',
  entry: {
    serverAppEntrypoint: ['@babel/polyfill', path.resolve(__dirname, '../src/server/serverAppEntrypoint')],
  },
  externals: {
    express: 'express',
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  plugins: [
    new LoadablePlugin({
      writeToDisk: true,
    }),
  ],
};

module.exports = merge(shared, webpackConfig);
