module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: 0,
    "arrowbody-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "import/extensions": "off",
  },
};
