const path = require('path')
const mix = require('laravel-mix')
var HtmlWebpackPlugin = require('html-webpack-plugin')

mix.disableNotifications()

mix.sass('src/assets/styles/app.scss', 'public/css')

mix.autoload({
    'jquery': ['$', 'jQuery', 'window.jQuery'],
    'moment': 'moment',
    'lodash': ['_', 'window._'],
    'popper.js': 'Popper'
})

mix.js('src/app.js', 'public/js')

mix.webpackConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '@': path.resolve(__dirname, 'public')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        })
    ]
})

mix.options({
    publicPath: 'public'
})