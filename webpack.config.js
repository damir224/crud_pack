const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoader = () => {};
  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
      }),
      new Dotenv({
        path: './.env', // Path to .env file (this is the default)
        safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),
    ];
    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      clean: true,
    },
    plugins: getPlugins(),
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
    },
    devtool: 'source-map',
  };
};
