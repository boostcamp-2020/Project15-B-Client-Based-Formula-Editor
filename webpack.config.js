const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: ["@babel/polyfill", "./src/index.jsx"],
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].[hash].js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(png|ico|jpg|gif)$/,
				use: "file-loader",
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devtool: "inline-source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			favicon: "public/favicon.ico",
		}),
		new CopyPlugin({
			patterns: [{ from: "public", to: "public" }],
		}),
	],
	devServer: {
		inline: true,
		historyApiFallback: true,
	},
};
