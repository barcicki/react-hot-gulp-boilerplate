var common = require('./webpack.common.js');
var webpack = require('webpack');

module.exports = {
    entry: [
        common.MAIN_SCRIPT_PATH_AND_NAME
    ],
    output: {
        path: common.BUILD_PATH,
        filename: common.BUNDLE_TARGET_PATH_AND_NAME
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: common.SCRITPS_PATH
        }]
    }
};
