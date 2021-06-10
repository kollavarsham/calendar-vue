module.exports = {
  devServer: {
    host: 'localhost',
    hot: process.env.NODE_ENV !== 'production',
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: 'Kollavarsham Calendar [BETA]',
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/calendar-vue'
    : '/',
};
