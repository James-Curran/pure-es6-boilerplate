require("@babel/register");

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'development',
    devtool: 'eval-source-map',

    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build/dist',
        publicPath: '/build/dist/',
        filename: 'bundle.js',
    },

    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                warnings: false,
                mangle: true,
                ie8: false,
                keep_fnames: true,
            },
        })],
    },
    module: {
        rules : [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: []

};

module.exports = config;
