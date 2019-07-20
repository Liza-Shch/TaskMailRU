const path = require('path');
const src = path.resolve(__dirname, 'public');
const build = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(src, 'index.js'),
    output: {
        path: build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [src],
                            }
                        }]
                })
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(src, 'index.html')
        }),
        new ExtractTextPlugin('bundle.css'),
    ]
};