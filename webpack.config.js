const path = require("path");
const webpack = require("webpack");
const MetaBannerPlugin = require("./etc/MetaBannerPlugin");
const {info} = require("./config.json")

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    embedAll: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "plugin"),
    filename: "[name].plugin.js",
    libraryTarget: "commonjs2"
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new MetaBannerPlugin(info)
  ]
};
