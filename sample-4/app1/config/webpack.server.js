const path = require('path');
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { SsrSyncFederationLoader } = require('@mf/loadable-adapters');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'server',
  target: false,
  entry: {
    serverAppEntrypoint: path.resolve(__dirname, '../src/server/serverAppEntrypoint'),
  },
  externals: {
    express: 'express',
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [SsrSyncFederationLoader.loader, 'babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new LoadablePlugin({
      writeToDisk: true,
    }),

    ...moduleFederationPlugin.server,
  ],
};

module.exports = merge(shared, webpackConfig);
