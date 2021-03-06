const config = {
  transform: {
    '^.+\\.(t|j)s$': require.resolve('./transformer.js')
  },
  testMatch: ['<rootDir>/packages/**/__test__/?(*.)+(spec|test).js'],
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['js'],
  testURL: 'http://localhost',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  rootDir: process.cwd(),
  roots: ['<rootDir>/packages', '<rootDir>/scripts'],
  collectCoverageFrom: ['packages/**/*.js'],
  timers: 'fake'
  // collectCoverage: true
}

module.exports = config
