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
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
                }
            },

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