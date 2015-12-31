// Karma configuration
// Generated on Tue Dec 29 2015 23:03:17 GMT+0100 (CET)

module.exports = function(config) {
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
        },
        sl_safari: {
            base: 'SauceLabs',
            browserName: 'safari'
        },
        sl_ios: {
            base: "SauceLabs",
            browserName: "iphone"
        },
        sl_android: {
            base: "SauceLabs",
            browserName: "android"
        },
        sl_android_4: {
            base: "SauceLabs",
            browserName: "android",
            version: "4.0"
        },
        sl_ie_11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: '11'
        },
        sl_ie_10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: '9'
        },
        sl_ie_9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: '9'
        },
    }

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'fixture'],


        // list of files / patterns to load in the browser
        files: [
            'src/*.js',
            'tests/*.js',
            'fixtures/*.html'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'fixtures/*.html': ['html2js']
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },

        reporters: ['dots', 'saucelabs'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        sauceLabs: {
            testName: 'ScramblerJS Unit Tests',
        },

        captureTimeout: 120000,
        browserNoActivityTimeout: 100000,
        browserDisconnectTimeout: 2000,
        browserDisconnectTolerance: 3,

        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}
