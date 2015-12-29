var gulp = require("gulp");
var concat = require("gulp-concat");
var Karma = require("karma").Server;


var paths = {
    src: [
        "node_modules/alertify.js/dist/js/alertify.js",
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

gulp.task("build", function() {
    return gulp
        .src(paths.src)
        .pipe(concat('scrambler.js'))
        .pipe(gulp.dest(paths.out));
});

gulp.task("watch", function() {
    gulp.watch(paths.src, ["build"]);
});

gulp.task("test", ["karma:ci"]);
gulp.task("default", ["karma:tdd", "watch"]);
