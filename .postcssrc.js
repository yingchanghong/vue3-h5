module.exports = {
  plugins: {
    autoprefixer: {}, // 用来给不同浏览器自动添加响应前缀， 如-webkit, -moz-
    'postcss-px-to-viewport': {
      viewportWidth: 750,
    },
  },
};
