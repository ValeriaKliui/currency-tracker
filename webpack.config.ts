import { resolve } from 'path';
import { type Configuration } from 'webpack';

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/webpack/types/config';

export default (env: BuildEnv): Configuration => {
    const paths: BuildPaths = {
        entry: resolve(__dirname, 'src', 'index.tsx'),
        html: resolve(__dirname, 'public', 'index.html'),
        build: resolve(__dirname, 'build'),
        favicon: resolve(__dirname, 'public', 'logo.svg'),
    };

    const mode = env.mode ?? 'development';
    const isDev = mode === 'development';
    const PORT = env.port ?? 3000;
    const alias = {
        '@assets': resolve(__dirname, 'src', 'assets'),
        '@constants': resolve(__dirname, 'src', 'constants'),
        '@components': resolve(__dirname, 'src', 'components'),
        '@store': resolve(__dirname, 'src', 'store'),
        '@hooks': resolve(__dirname, 'src', 'hooks'),
        '@pages': resolve(__dirname, 'src', 'pages'),
        '@utils': resolve(__dirname, 'src', 'utils'),
    };

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        alias,
    });

    return config;
};
