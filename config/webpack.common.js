const path = require('path');
const webpack = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const commonRules = require('./commonRules');
const alias = require('./alias');

const cwd = process.cwd();

module.exports = ({
  mode,
  entry,
  output,
  plugins = [],
  rules = [],
  devtool,
  performance = {},
  optimization = {},
  devServer = {}
}) => ({
  mode,
  entry,
  output: {
    path: path.resolve(cwd, 'dist'),
    publicPath: '/',
    ...output
  },
  module: {
    rules: [...commonRules, ...rules]
  },
  resolve: {
    alias,
    modules: [path.resolve(cwd, 'src'), 'node_modules'],
    extensions: ['.js', '.scss']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    ...plugins
  ],
  devtool,
  target: 'web',
  performance,
  devServer,
  optimization: {
    namedModules: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4
        }
      }
    },
    runtimeChunk: true,
    ...optimization
  }
});
