const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = env => {
	const config = {
		devServer: {
			port: 3000,
			historyApiFallback: true,
			host: '0.0.0.0',
		},
		entry: {
			index: path.join(__dirname, 'src', 'index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist'),
		},
		mode: env.development ? 'development' : 'production',
		module: {
			rules: [
				{
					test: /\.js$/,
					include: [
						path.join(__dirname, '/src/'),
					],
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
							],
							plugins: [
								'@babel/plugin-transform-runtime',
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-proposal-export-namespace-from',
								'@babel/plugin-proposal-function-sent',
								'@babel/plugin-proposal-json-strings',
								'@babel/plugin-proposal-numeric-separator',
								'@babel/plugin-proposal-throw-expressions',
								'@babel/plugin-syntax-dynamic-import',
								'@babel/plugin-syntax-import-meta',
							],
						},
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		plugins: [
			new CopyPlugin([
				{ from: 'src/index.html', to: '' },
				{ from: 'src/assets/', to: 'assets/' },
			]),
		],
	};

	const toDefine = {
		'process.env.APP_NAME': JSON.stringify(pkg.name),
		'process.env.APP_DESCRIPTION': JSON.stringify(pkg.description),
		'process.env.APP_VERSION': JSON.stringify(pkg.version),
	};

	if (env.development) {
		config.devtool = 'inline-source-map';
		toDefine['process.env.NODE_ENV'] = JSON.stringify('development');
	}

	if (env.production) {
		config.optimization = {
			minimizer: [new UglifyJsPlugin({
				uglifyOptions: {
					mangle: true,
				},
			})],
		};
		toDefine['process.env.NODE_ENV'] = JSON.stringify('production');
	}

	config.plugins.push(new webpack.DefinePlugin(toDefine));

	return config;
};
