export default {
    app: './app',
    build: './build',
    docs: './docs',
    html: {
        files: [
            './app/**/*.html',
            '!./app/vendors/**/*.html'
        ]
    },
    js: {
        files: [
            './app/**/*.js',
            '!./app/**/*.{spec,min}.js',
            '!./app/vendors/**/*.js'
        ]
    },
    browserify: {
        dev: {
            entries: ['./app/app.js'],
            out: 'app.min.js'
        },
        vendor: {
            libs: [
                'angular',
                'angular-animate',
                'angular-material',
                'angular-aria',
                'angular-ui-router',
                'angular-sanitize',
                'lodash'
            ],
            entries: ['./app/vendor.js'],
            out: 'vendor.min.js'
        }
    },
};
