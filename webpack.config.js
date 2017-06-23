var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
  	'./build/app'
  ],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "main.bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './build/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				},
			},
			{
				test: /\.html$/,
				loader: "raw-loader"
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		contentBase: './build',
		hot: true
	}
}