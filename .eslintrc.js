module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/html-indent': ['error', 'tab', {
        'attribute': 1,
        'closeBracket': 0,
        'ignores': []
    }],
    'no-tabs':0,
    'indent': ['error', 'tab', {
        'SwitchCase': 1,
        'ArrayExpression': 1,
        'ObjectExpression': 1
    }],
    'allowAllPropertiesOnSameLine':true,
    'semi': [2, 'always'],
    'no-extra-semi': 'error',
    'computed-property-spacing': [2, 'never'],
    'no-multiple-empty-lines': [2, {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
    }],
    'no-console': 'warn',
    'no-use-before-define': [2, {
        'functions': false
    }],
    'prefer-const': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
