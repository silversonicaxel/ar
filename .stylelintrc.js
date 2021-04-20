module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  ignoreFiles: ['node_modules/**', 'src/assets/fonts/**', 'src/assets/style/reset.css'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores', 'include', 'mixin', 'if', 'else', 'media', 'for'],
      },
    ],
    'order/order': ['custom-properties', 'declarations'],
  },
}
