const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/ThemeWrapper.js'),
	},
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
			],
		},
	},
};
