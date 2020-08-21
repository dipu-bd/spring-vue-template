module.exports = {
  devServer: {
    proxy: "http://localhost:8080",
  },
  transpileDependencies: ["vuetify"],
  chainWebpack(config) {
    config.performance.maxEntrypointSize(512 * 1024).maxAssetSize(2 * 1024 * 1024);
  },
};
