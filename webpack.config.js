const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].[hash].js",
	},
	module: {
		rules: [
			{
				test: /\.js|.jsx$/,
				exclude: /node_modules/,
				use: "babel-loader",
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
	],
	devServer: {
		inline: true,
		historyApiFallback: true,
	},
};
