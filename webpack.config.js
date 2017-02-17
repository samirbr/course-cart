var path = require('path');
var webpack = require('webpack');
var ts = require('awesome-typescript-loader');

var config = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/bootstrap.tsx'
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ts.CheckerPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loaders: ['react-hot-loader', 'awesome-typescript-loader'],
        include: path.join(__dirname, 'application')
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        include: path.join(__dirname, 'application')
      }
    ]
  }
};

module.exports = config;