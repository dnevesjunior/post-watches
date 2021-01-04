// allow js files to contain jsx
// switch off warnings for console and alerts
module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 0,
    'no-alert': 0,
  },
};
