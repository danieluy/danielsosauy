const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');
require('dotenv').config();

module.exports = env => {
	const config = {
		mode: env.development ? 'development' : 'production',
		entry: {
			index: path.join(__dirname, 'src', 'index.tsx'),
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'public'),
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'ts-loader',
						},
					],
				},
				{
					enforce: 'pre',
					test: /\.js$/,
					loader: 'source-map-loader',
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
		...mergeDotEnv(process.env),
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

function mergeDotEnv(processEnv) {
	return Object.keys(processEnv)
		.reduce((env, key) => {
			env[`process.env.${key}`] = JSON.stringify(processEnv[key]);
			return env;
		}, {});
}
