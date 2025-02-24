import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/types';

export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
	const { mode, paths } = options;

	const isDev = mode === 'development';
	return {
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: 'bundle.js',
			clean: true,
		},
		plugins: buildPlugins(options),

		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev && 'inline-source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
	};
};
