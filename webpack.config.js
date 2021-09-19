// Generated using webpack-cli https://github.com/webpack/webpack-cli

const glob = require("glob");
const path = require("path");
const isProduction = process.env.NODE_ENV == "production";

const Dotenv = require("dotenv-webpack");

const entries = glob.sync("./src/entries/*.js").map(function (key) {
  return [path.basename(key), key];
});
const entryObject = Object.fromEntries(entries); // {name: path, name: path, ...}

const config = {
  entry: entryObject,
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist/js"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
