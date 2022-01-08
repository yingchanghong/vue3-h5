module.exports = ({ file }) => {
  return {
    plugins: {
      autoprefixer: {}, // 用来给不同浏览器自动添加响应前缀， 如-webkit, -moz-
      'postcss-px-to-viewport': {
        viewportWidth:
          file && file.dirname && file.dirname.includes('vant') ? 375 : 750,
      },
    },
  };
};
