const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Skeleton Loader Demo',
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
  },
  devServer: {
    contentBase: './docs',
    open: true
  },
};
