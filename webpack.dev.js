const path = require('path')
const glob = require('glob')

const PurgecssPlugin = require('purgecss-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.js',
    output: {
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    devServer: {
        port: 8082,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        watchContentBase: true,
        writeToDisk: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            /* {
                // Load all icons
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                type: 'asset/resource',
            }, */
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.join(__dirname, 'public')}/**/*`, {
                nodir: true,
            }),
        }),
    ],
}
