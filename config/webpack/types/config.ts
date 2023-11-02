export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    favicon: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    alias: Record<string, string>;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
