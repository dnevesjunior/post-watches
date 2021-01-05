// allow js files to contain jsx
// switch off warnings for console and alerts
// disable import/no-unresolved due to require('channels')
// explore solution here https://github.com/benmosher/eslint-plugin-import#resolvers
module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 0,
    'no-alert': 0,
    'import/no-unresolved': 'off',
  },
  env: {
    browser: true,
  },
};
