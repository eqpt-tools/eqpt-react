/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  ignorePatterns: ['packages/**/dist', 'packages/**/app'],
  extends: [
    'next',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-underscore-dangle': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'func-names': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'operator-linebreak': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-indent': ['off'],
  },
};
