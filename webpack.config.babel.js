import webpack from 'webpack';
import path from 'path';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import cssnano from 'cssnano';
import env from './config/env';

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  reports: path.join(__dirname, 'reports'),
};

const client = {
  entry: {
    app: ['babel-polyfill', path.resolve(PATHS.app)],
  },
  output: {
    path: path.resolve(PATHS.dist, 'public'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*'],
  },
  devtool: 'source-map',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 100000,
    maxAssetSize: 450000,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(jpe?g|gif|png|wav|mp3)$/,
      use: ['file-loader'],
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader'],
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }],
  },
  plugins: [
    new HtmlPlugin({
      title: 'Welcome to Chantebrique 2017',
      template: path.resolve(PATHS.app, 'index.html'),
      favicon: path.resolve(PATHS.app, 'favicon.ico'),
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
      },
    }),
    new webpack.DefinePlugin(env('production')),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        safe: true,
      },
      canPrint: false,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../../reports/client/report.html',
      generateStatsFile: true,
      statsFilename: '../../reports/client/stats.json',
      openAnalyzer: false,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
};

export default client;
