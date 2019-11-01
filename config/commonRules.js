const eslint = require('eslint');

const { NODE_ENV } = process.env;

module.exports = [
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'eslint-loader',
      options: {
        formatter: eslint.CLIEngine.getFormatter('stylish'),
        emitWarning: NODE_ENV !== 'production'
      }
    }
  },
  {
    test: /\.js$/, // Transform all .js files required somewhere with Babel
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      outputPath: 'fonts'
    }
  },
  {
    test: /\.(jpg|png|gif)$/,
    loader: 'file-loader',
    options: {
      outputPath: 'images'
    }
  },
  {
    test: /\.html$/,
    loader: 'html-loader'
  }
];
