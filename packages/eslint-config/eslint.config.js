import antfu from '@antfu/eslint-config'

export default (main = {}, overrides = {}) => antfu(
  {
    typescript: true,
    react: true,
    ...main,
  },
  {
    // your overrides
    rules: {
      'no-irregular-whitespace': 'off',
      curly: ['error', 'all'],
      'style/brace-style': [
        'error',
        '1tbs',
      ],
      'style/space-before-function-paren': [
        'error',
        'always',
      ],
      'array-bracket-newline': [
        'error',
        'consistent',
      ],
    },
    ...overrides,
  },
)
