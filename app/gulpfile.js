var gulp = require("gulp");
var concat = require("gulp-concat");

var paths = {
    src: [
        "node_modules/alertify.js/dist/js/alertify.js",
        "src/**/*.js"
    ],
    out: "build"
};

gulp.task("build", function() {
    return gulp
        .src(paths.src)
        .pipe(concat('scrambler.js'))
        .pipe(gulp.dest(paths.out));
});

gulp.task("watch", function() {
    gulp.watch(paths.src, ["build"]);
});

gulp.task("default", ["watch"]);
