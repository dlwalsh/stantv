module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest-config/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/jest-config/__mocks__/styleMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-config/setupTests.ts'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};
