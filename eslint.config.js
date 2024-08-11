import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config({
  extends: [
    js.configs.recommended, 
    ...tseslint.configs.recommended,
    'plugin:react/recommended',
    'prettier',
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'eslint.config.js', 'vite.config.js'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: ['react-hooks', 'react-refresh', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
