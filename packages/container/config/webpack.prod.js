const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commomConfig = require("./webpack.commom");
const { dependencies } = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge{commomConfig, prodConfig}
