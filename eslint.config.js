// eslint.config.js
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/src/*.(ts|tsx|js|jsx)'],
    plugins: {
      '@stylistic': stylistic
    },
    // extends: ['preact'],
    rules: {
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
    },
  },
]);
