import webpack from 'webpack';
import path from 'path';
import HtmlPlugin from 'html-webpack-plugin';
import env from './config/env';

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

export default {
  entry: {
    app: ['babel-polyfill', path.resolve(PATHS.app)],
  },
  output: {
    path: path.resolve(PATHS.dist, 'public'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 3030,
    overlay: true,
    proxy: {
      '/': {
        target: 'http://localhost:5000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(jpe?g|gif|png|wav|mp3)$/,
      use: ['file-loader'],
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader'],
    }],
  },
  plugins: [
    new HtmlPlugin({
      title: 'Welcome to Chantebrique 2017',
      template: path.resolve(PATHS.app, 'index.html'),
      favicon: path.resolve(PATHS.app, 'favicon.ico'),
    }),
    new webpack.DefinePlugin(env()),
  ],
};
