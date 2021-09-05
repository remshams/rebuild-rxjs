module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80
    }
  },
  collectCoverage: true,
  reporters: ['default', 'jest-summarizing-reporter']
};
