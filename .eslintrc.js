module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    // "prettier/prettier": 2, // 这项配置 对于不符合prettier规范的写法，eslint会提示报错
  },
};
