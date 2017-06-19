var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
  	'./build/app'
  ],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "main.bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
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