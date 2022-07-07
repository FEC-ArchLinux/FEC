const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, './client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/public'),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
