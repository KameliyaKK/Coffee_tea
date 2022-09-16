const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
	devServer: {
		open: true,
		hot: true,
		port: 8080,
	}
};

module.exports = ({ develop }) => ({
	mode: develop ? 'development' : 'production',
	entry: './src/index.js', //можно будет поменять с бабл видео webpack 5 онлайн школа methed
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.[contenthash].js',
		clean: true,
		assetModuleFilename: 'assets/[name][ext]'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: './styles/main.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
				use: // для жатия картинок инфо https://www.npmjs.com/package/image-webpack-loader
					[
						{
							loader: 'image-webpack-loader',
							options: {
								mozjpeg: {
									progressive: true,
								},
								// optipng.enabled: false will disable optipng
								optipng: {
									enabled: false,
								},
								pngquant: {
									quality: [0.65, 0.90],
									speed: 4
								},
								gifsicle: {
									interlaced: false,
								},
								// the webp option will enable WEBP
								webp: {
									quality: 75
								}
							},
						}
					],

				type: 'asset/resource' // было 'asset/inline' не собирались картинки в dist
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		]
	},
	...devServer(develop),
});