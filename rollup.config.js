import pkg from './package.json';
import external from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
export default [
	{
		input: 'src/index.js',
		output: [
			{
				format: 'es',
				file: pkg.module,
			},
			{
				format: 'cjs',
				file: pkg.main,
			},
		],
		plugins: [
			external({
				includeDependencies: false,
			}),
			babel({
				exclude: 'node_modules/**',
			}),
		],
	},
];
