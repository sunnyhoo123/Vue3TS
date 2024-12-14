const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/main.ts', // Main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'], // Resolve these extensions
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for '@/'
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/], // Process .vue files as TypeScript
        },
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.less$/, // Add the rule for LESS files
        use: [
          'vue-style-loader', // Injects styles into the DOM
          'css-loader', // Resolves CSS imports
          'less-loader', // Compiles LESS to CSS
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // Required for Vue files
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
      templateParameters: {
        BASE_URL: `/`,
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
    hot: true, // Enable Hot Module Replacement (HMR)
  },
};
