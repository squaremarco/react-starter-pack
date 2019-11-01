const path = require('path');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = require('./webpack.common')({
  mode: 'production',
  entry: [path.resolve(process.cwd(), 'src/index.js')],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  rules: [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            modules: true,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            ident: 'postcss',
            plugins: [autoprefixer()]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: sass,
            sassOptions: {
              fiber: false
            }
          }
        }
      ]
    },
    {
      test: /.css$/,
      include: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            modules: true,
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            ident: 'postcss',
            plugins: [autoprefixer()]
          }
        }
      ]
    }
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name][hash].css',
      chunkFilename: '[name][hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(process.cwd(), 'src/assets/favicon.png'),
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          opengraph: false,
          yandex: false,
          windows: false
        }
      }
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
});
