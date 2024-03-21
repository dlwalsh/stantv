const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: './src/index.tsx',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: './assets', to: '.' }],
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: './dist/styles.css',
      }),
      new ProvidePlugin({
        React: 'react',
      }),
    ],
    devServer: {
      port: 4321,
      historyApiFallback: true,
    },
  };
};
