const path = require('path');

const cwd = process.cwd();

module.exports = {
  'react-dom': '@hot-loader/react-dom',
  Root: path.resolve(cwd, 'src/'),
  Assets: path.resolve(cwd, 'src/assets/'),
  Components: path.resolve(cwd, 'src/components/'),
  Store: path.resolve(cwd, 'src/store/'),
  Utils: path.resolve(cwd, 'src/utils/')
};
