module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
  setupFiles: [
    '<rootDir>/config/jest/shim.js',
    '<rootDir>/config/jest/browser.mocks.js'
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ],
  verbose: true
};