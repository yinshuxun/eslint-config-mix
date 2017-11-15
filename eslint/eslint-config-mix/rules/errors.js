module.exports = {
  'comma-dangle': [
    0,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'no-await-in-loop': 2,
  'no-compare-neg-zero': 2,
  'no-cond-assign': 2,
  'no-console': 1,
  'no-constant-condition': 1,
  'no-control-regex': 2,
  'no-debugger': 1,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty-character-class': 2,
  'no-empty': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': 0,
  'no-extra-semi': 2,
  'no-func-assign': 2,
  'no-inner-declaration': 0,
  'no-irregular-whitespace': 2,
  'no-mixed-operators': ['error', { allowSamePrecedence: true }],
  'no-negated-in-lhs': 2,
  'no-obj-calls': 1,
  'no-regex-spaces': 2,
  'no-sparse-arrays': 2,
  // ( ,  [  , /  ,  +  ,  -  注意这5个token 前置分号问题
  'no-unexpected-multiline': 2,
  // 避免prettier fixed 换行合并问题 no-unexpected-multiline'
  'no-restricted-syntax': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2
};