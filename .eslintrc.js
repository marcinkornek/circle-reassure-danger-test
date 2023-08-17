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
  plugins: [
    '@typescript-eslint',
    'module-resolver',
    'testing-library',
    'simple-import-sort',
    'unused-imports',
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$', 'node_modules/react-native-blob-util/index\\.js$'],
    jest: {
      version: require('jest/package.json').version,
    },
  },
  rules: {
    'newline-before-return': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-default-export': 'error',
    //import
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          //side effects imports
          ['^\\u0000'],
          // react and react-native imports
          ['^react$', '^react-native$'],
          // expo and other libraries imports
          ['^expo', '^'],
          // core imports
          ['^@core?\\w'],
          // shared imports
          ['^@shared?\\w'],
          // features imports
          ['^@features?\\w'],
          // sibling hook import
          ['^\\./use'],
          // other sibling imports
          ['^\\./*'],
          // local sibling import
          ['^./.*styles$'],
          // relative imports
          ['^\\..'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-i18next',
            importNames: ['useTranslation'],
            message: "Please import useTranslation from '@shared/hooks/useTranslation' instead",
          },
          {
            name: '@mobily/stacks',
            importNames: [
              'useTheme',
              'Box',
              'Stack',
              'Bleed',
              'Columns',
              'FillView',
              'Hidden',
              'Inline',
              'Inset',
              'Rows',
              'Tiles',
            ],
            message: "Please import from '@shared/layout/' instead",
          },
          {
            name: '@react-navigation/native',
            importNames: ['useTheme'],
            message: "Please import useTheme from '@emotion/react' instead",
          },
          {
            name: 'react-native-markdown-display',
            importNames: ['Markdown'],
            message: "Please import Markdown from '@shared/ui/Markdown' instead",
          },
          {
            name: 'react-native',
            importNames: ['AppState'],
            message: "Please use functions from '@core/nativeWrappers/appstate' instead",
          },
        ],
        patterns: [
          {
            group: ['@shared/schemas/**'],
            message: 'Please use `useSchemas()` hook instead',
          },
        ],
      },
    ],
  },
};
