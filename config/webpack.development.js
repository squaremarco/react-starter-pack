const path = require('path');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');

const pkg = require('../package.json');

module.exports = require('./webpack.common')({
  mode: 'development',
  entry: ['react-hot-loader/patch', path.resolve(process.cwd(), 'src/index.js')],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  rules: [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            ident: 'postcss',
            plugins: [autoprefixer()]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            implementation: sass,
            sassOptions: {
              fiber: false
            }
          }
        }
      ]
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(process.cwd(), 'src/index.html')
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(process.cwd(), 'src/assets/favicon.png')
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'src/'),
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    overlay: {
      errors: true
    },
    clientLogLevel: 'silent'
  },
  performance: {
    hints: false
  }
});
