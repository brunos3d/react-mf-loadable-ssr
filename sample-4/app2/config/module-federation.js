const { dependencies } = require('../package.json');
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const { FederationStatsPlugin, FederationModuleIdPlugin } = require('@mf/loadable-adapters');

module.exports = {
  client: [
    new FederationStatsPlugin(),
    new FederationModuleIdPlugin(),
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Content': './src/client/components/Content',
      },
      remotes: {},
      shared: [
        {
          'styled-components': {
            requiredVersion: dependencies['styled-components'],
            singleton: true,
            eager: true,
          },
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
            eager: true,
          },
          'react-dom': {
            requiredVersion: dependencies['react-dom'],
            singleton: true,
            eager: true,
          },
        },
      ],
    }),
  ],
  server: [
    new NodeFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      runtime: false,
      exposes: {
        './Content': './src/client/components/Content',
      },
      remotes: {},
      shared: [
        {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
            eager: true,
          },
          'react-dom': {
            requiredVersion: dependencies['react-dom'],
            eager: false,
            singleton: true,
          },
        },
      ],
    }),
    new StreamingTargetPlugin({
      name: 'app2',
      library: { type: 'commonjs-module' },
      remotes: {},
    }),
  ],
};
