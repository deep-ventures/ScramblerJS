var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var coveralls = require('gulp-coveralls');

var Karma = require("karma").Server;

var paths = {
    assets: [
        "assets/**/*"
    ],
    src: [
        "src/**/*.js"
    ],
    out: "build"
};

gulp.task("karma:ci", function (done) {
    new Karma({
        configFile: __dirname + "/karma.ci.js"
    }, done).start();
});

// run the test continuously
gulp.task("karma:tdd", function (done) {
    new Karma({
        configFile: __dirname + "/karma.conf.js"
    }, done).start();
});

gulp.task("assets", function() {
    return gulp
        .src(paths.assets)
        .pipe(gulp.dest(paths.out + "/assets"));
});

gulp.task("build", function() {
    return gulp
        .src(paths.src)
        .pipe(concat('scrambler.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(paths.out));
});

gulp.task("watch", function() {
    gulp.watch(paths.assets, ["assets"]);
    gulp.watch(paths.src, ["build"]);
});


gulp.task("coveralls", ["karma:ci"], function() {
    return gulp.src('coverage/**/lcov.info')
        .pipe(coveralls());
});

gulp.task("test", ["coveralls"]);

gulp.task("build-all", ["assets", "build"]);

gulp.task("default", ["build-all", "karma:tdd", "watch"]);
