const path = require('path');
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'web',
  target: 'web',
  entry: {
    clientAppEntrypoint: path.resolve(__dirname, '../src/client/clientAppEntrypoint'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3001/static/',
  },
  plugins: [
    ...moduleFederationPlugin.client,

    new LoadablePlugin({
      writeToDisk: true,
    }),
  ],
};

module.exports = merge(shared, webpackConfig);
