/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>__mocks__/fileMock.js',
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/identity-obj-proxy',
        '\\.svg$': '<rootDir>__mocks__/svg.js',
        '^@constants/(.*)': '<rootDir>src/constants/$1',
        '^@utils/(.*)': '<rootDir>src/utils/$1',
    },
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules'],
    rootDir: './',
    testMatch: ['<rootDir>/src/tests/**/*(*.)@(spec|test).[tj]s?(x)'],
};

module.exports = config;
