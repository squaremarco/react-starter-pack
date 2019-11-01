// eslint-disable-next-line import/no-dynamic-require
module.exports = require(`./config/webpack.${process.env.NODE_ENV || 'development'}`);
