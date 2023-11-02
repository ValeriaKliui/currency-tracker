import { type ResolveOptions } from 'webpack';

import { type BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    const { alias } = options;
    return {
        alias,
        extensions: ['.tsx', '.ts', '.js'],
    };
}
