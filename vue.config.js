module.exports = {
    devServer: {
        host: 'localhost',
        hot: true
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            title: 'Kollavarsham Calendar [BETA]'
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/calendar-vue'
        : '/',
}