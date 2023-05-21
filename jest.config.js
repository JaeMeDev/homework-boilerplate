const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
    setupFiles: [
        // add your setup files..
    ],
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
    ],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: [
        'node_modules',
        '<rootDir>.*/public',
        '<rootDir>/.next/',
    ],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = async () => ({
    ...await createJestConfig(customJestConfig)(),
    transformIgnorePatterns: [
        // add your transform ignore patterns..
    ],
});
