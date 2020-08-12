module.exports = {
  root: true,

  env: {
    node: true,
    commonjs: true,
    jest: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: '**/*.spec.js',
      rules: {
        'node/no-unpublished-require': 0,
        'node/no-missing-require': 0
      },
      env: {
        jest: true
      }
    }
  ]
}
