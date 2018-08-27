const webpack = require('webpack');

module.exports = {
    devtool: 'none',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build/dist',
        publicPath: '/build/dist/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFile: './.eslintrc',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
};
