const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // transpileDependencies: true
  // Vue CLI settings
  devServer: {
    port: 3000,
  },

  // Webpack customizations
  configureWebpack: {
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, 'src'), // Alias for '@/'
        '@components': '@/components',
      },
    },
    plugins: [
      // Example Webpack plugin
      new (require('webpack').DefinePlugin)({
        'process.env': {
          VUE_APP_CUSTOM_VAR: JSON.stringify('custom_value'),
        },
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    devtool: 'source-map', // Enable source maps for development
  },

  // More fine-grained control with chainWebpack
  chainWebpack: config => {
    // Add a rule for processing TypeScript files
    config.module.rule('ts').test(/\.ts$/).use('ts-loader').loader('ts-loader').end();

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({
        ...options,
        limit: 8192,
      }));

    config.module
      .rule('css')
      .oneOf('vue')
      .use('css-loader')
      .tap(options => {
        options.modules = {
          localIdentName: '[name]__[local]--[hash:base64:5]',
        };
        return options;
      });
  },
});
