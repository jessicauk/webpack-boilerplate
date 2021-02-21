const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: '/src/index.test.js',
        use: 'mocha-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
