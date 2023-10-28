module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "no-type-imports" // этот вариант предпочтительнее
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.tsx']
  }
};
