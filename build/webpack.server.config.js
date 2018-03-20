/*
	https://vuejsdevelopers.com/2017/12/11/vue-ssr-router/
*/
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.client.config");

module.exports = merge(baseConfig, {
	target: "node",
	entry: {
		app: "./src/ui/server.entry.js"
	},
	devtool: false,
	output: {
		path: path.resolve(__dirname, "../public"),
		filename: "js/server.build.js",
		libraryTarget: "commonjs2"
	},
	externals: Object.keys(require("../package.json").dependencies),
	plugins: [
		new webpack.DefinePlugin({
			"process.env":"production"
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
});
