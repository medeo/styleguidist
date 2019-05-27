import pkg from './package.json';
import external from 'rollup-plugin-peer-deps-external';
import jsx from 'rollup-plugin-jsx';

export default [
	{
		input: 'src/index.js',
		output: {
			format: 'es',
			file: pkg.module,
		},
		plugins: [
			external({
				includeDependencies: false,
			}),
			jsx({ factory: 'React.createElement' }),
		],
	},
];
