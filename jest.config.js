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
            '<rootDir>src/tests/mocks/fileMock.ts',
        '\\.svg$': '<rootDir>src/tests/mocks/svg.tsx',
        '^@constants/(.*)': '<rootDir>src/constants/$1',
        '^@utils/(.*)': '<rootDir>src/utils/$1',
        '^@store/(.*)': '<rootDir>src/store/$1',
        '^@hooks/(.*)': '<rootDir>src/hooks/$1',
        '^@components/(.*)': '<rootDir>src/components/$1',
        '^@assets/(.*)': '<rootDir>src/assets/$1',
    },
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules'],
    rootDir: './',
    testMatch: [
        '<rootDir>/src/tests/**/*(*.)@(spec|test).[tj]s?(x)',
        '<rootDir>src/**/*(*.)@(spec|test).ts?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>jest.setup.ts'],
};

module.exports = config;
