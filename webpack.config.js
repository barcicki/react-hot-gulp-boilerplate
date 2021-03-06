var common = require('./webpack.common.js');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        common.MAIN_SCRIPT_PATH_AND_NAME
    ],
    output: {
        path: common.BUILD_PATH,
        filename: common.BUNDLE_NAME
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: common.SCRITPS_PATH
        }]
    }
};
