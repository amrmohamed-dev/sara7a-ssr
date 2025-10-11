import js from '@eslint/js';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import nodePlugin from 'eslint-plugin-n';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import path from 'path';

const compat = new FlatCompat({
  baseDirectory: path.join(import.meta.dirname),
});

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },

  ...compat.extends('airbnb-base'),
  ...compat.extends('prettier'),
  ...compat.extends('plugin:n/recommended'),

  {
    plugins: {
      import: importPlugin,
      n: nodePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          jsx: 'always',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
      'spaced-comment': 'off',
      'no-console': 'warn',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-process-exit': 'off',
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: 'req|res|next|val' },
      ],
    },
  },
];
