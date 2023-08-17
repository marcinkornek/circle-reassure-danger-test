/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:testing-library/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['build/*', 'lint/build'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'module-resolver', 'testing-library', 'simple-import-sort', 'unused-imports'],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$', 'node_modules/react-native-blob-util/index\\.js$'],
    jest: {
      version: require('jest/package.json').version,
    },
  },
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'jest/expect-expect': ['error', {assertFunctionNames: ['expect', 'measurePerformance']}],
  },
};
