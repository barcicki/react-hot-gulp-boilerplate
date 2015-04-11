var webpack = require('webpack');
var common = require('./webpack.common.js');
var gulp = require('gulp');
var del = require('del');

// clean up build dir
gulp.task('clean', function(cb) {
    del(['build'], cb);
});

// copy no-scripts files
gulp.task('copy-source', ['clean'], function (cb) {
   return gulp
       .src(common.SOURCE_GLOB)
       .pipe(gulp.dest(common.BUILD_PATH))
});

// run webpack in production environment
gulp.task('build-bundle', function (cb) {
    var webpack = require('webpack');
    var prodConfig = require('./webpack.production');

    webpack(prodConfig, function (err) {
        if (err) {
            console.log(err);
        }

        cb();
    })
});

gulp.task('build', ['copy-source', 'build-bundle']);

// server live-reload dev server (based on react-hot-boilerplate server)
gulp.task('serve', function () {
    var webpack = require('webpack');
    var devConfig = require('./webpack.config');
    var WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(devConfig), {
        publicPath: common.BUNDLE_PUBLIC_PATH,
        hot: true,
        contentBase: common.SOURCE_PATH,
        historyApiFallback: true
    }).listen(3000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:3000');
    });
});