const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'dist',
  devServer: {
    host: 'localhost',
    port: '8080',
    https: false,
    hot: false,
    proxy: null,
  },
});