const fs = require('node:fs')

const config = JSON.parse(fs.readFileSync(`${__dirname}/.esm.swcrc`, 'utf-8'))

module.exports = {
  testEnvironment: 'node',
  testRegex: '(\\.|/)test\\.ts$',
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '.d.ts'],
  watchPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/',
    '/lib/',
    '/esm/',
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '.test.{ts,tsx}'
  ],
  modulePaths: ['<rootDir>/src'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
  '^.+\\.(t|j)sx?$': ['@swc/jest', config],
  },
}