//

module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native'],
  ignorePatterns: ['!.storybook', '!.ondevice'],
};
