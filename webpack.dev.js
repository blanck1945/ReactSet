const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].bundle.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin],
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true,
        historyApiFallback: true
    }
});