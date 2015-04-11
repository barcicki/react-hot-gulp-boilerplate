var path = require('path');

var SOURCE_DIR = 'src';
var SCRIPTS_DIR = 'scripts';
var BUILD_DIR = 'build';
var ASSETS_DIR = 'assets';
var MAIN_SCRIPT_NAME = 'index';
var BUNDLE_NAME = 'bundle.js';

var sourcePath = path.join(__dirname, SOURCE_DIR);

module.exports = {
    SOURCE_PATH: sourcePath,
    SOURCE_GLOB: [
        './' + SOURCE_DIR + '/*.*'
    ],
    SCRITPS_PATH: path.join(sourcePath, SCRIPTS_DIR),
    BUILD_PATH: path.join(__dirname, BUILD_DIR),
    BUNDLE_PUBLIC_PATH: '/' + ASSETS_DIR + '/',
    BUNDLE_NAME: BUNDLE_NAME,
    BUNDLE_TARGET_PATH_AND_NAME: ASSETS_DIR + '/' + BUNDLE_NAME,
    MAIN_SCRIPT_PATH_AND_NAME: './' + SOURCE_DIR + '/' + SCRIPTS_DIR + '/' + MAIN_SCRIPT_NAME
};
