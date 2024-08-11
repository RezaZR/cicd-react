module.exports = {
  env: {
		browser: true,
		es2021: true,
  },
  extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier'
	],
	files: ['**/*.{js,jsx,ts,tsx}'],
  overrides: [
		{
			env: {
					node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
					sourceType: 'script',
			},
		},
  ],
  parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
  },
  plugins: [
		'react-hooks',
		'react-refresh',
		'react',
		'@typescript-eslint',
		'prettier'
	],
  rules: {
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
};