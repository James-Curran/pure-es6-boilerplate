require("@babel/register");

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'production',
    devtool: 'none',

    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build/dist',
        publicPath: '/build/dist/',
        filename: 'bundle.js',
    },

    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions: {
                warnings: false,
                mangle: true,
                ie8: false,
                keep_fnames: false,
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
