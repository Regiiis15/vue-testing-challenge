module.exports = {
  rootDir: './',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  setupFiles: ['jest-localstorage-mock'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
