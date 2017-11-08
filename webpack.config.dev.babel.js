import webpack from 'webpack';
import path from 'path';
import HtmlPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import dotenv from 'dotenv';

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

//==========================================================

const currentDir = path.resolve(__dirname);
const rootDir = path.join(currentDir, '.');
const NODE_ENV = process.env.NODE_ENV || 'development';

const globalDotEnv = dotenv.config({
  path: path.join(rootDir, '.env'),
  silent: true
});

const allVars = Object.assign({}, {
  'NODE_ENV': NODE_ENV
}, globalDotEnv.parsed);
const allVars2 = { NODE_ENV, ...globalDotEnv.parsed }

const initialVariableObject =
  Object.keys(allVars)
    .reduce((memo, key) => {
      memo['process.env.' + key.toUpperCase()] =
        JSON.stringify(allVars[key]);
      return memo;
    }, {});

//==========================================================

export default {
  entry: {
    app: ['babel-polyfill', path.resolve(PATHS.app)]
  },
  output: {
    path: path.resolve(PATHS.dist, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*']
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 3030,
    proxy: {
      '/': {
        target: 'http://localhost:5000/',
        secure: false
      }
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(jpe?g|gif|png|wav|mp3)$/,
      use: ['file-loader']
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Welcome to Chantebrique 2017',
      template: path.resolve(PATHS.app, 'index.html'),
      favicon: path.resolve(PATHS.app, 'favicon.ico')
    }),
    new webpack.DefinePlugin(initialVariableObject)
  ]
};