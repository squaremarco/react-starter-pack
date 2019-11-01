module.exports = {
  setupFiles: ['<rootDir>/config/enzymeConfig'],
  setupFilesAfterEnv: ['<rootDir>/config/jestSetupFramework'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^Root(.*)$': '<rootDir>/src$1',
    '^Assets(.*)$': '<rootDir>/src/assets$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Store(.*)$': '<rootDir>/src/store$1',
    '^Utils(.*)$': '<rootDir>/src/utils$1',
    '^TestUtils(.*)$': '<rootDir>/testUtils$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!**/node_modules/**'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
