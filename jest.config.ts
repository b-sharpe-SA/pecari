import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    moduleDirectories: ['node_modules', '<rootDir>'],
    testEnvironment: 'node',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore dist folder
};

export default jestConfig;
