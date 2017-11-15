module.exports = {
  root: true,
  extends: ['alloy/vue'],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    "indent": [2, "tab"],
    "no-tabs": 0,
    "prefer-promise-reject-errors": 0,
    "radix": 0,
    "no-cond-assign": 0
  }
};
