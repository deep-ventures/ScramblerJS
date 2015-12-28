var gulp = require("gulp");

var paths = {
    src: [
        "src/**/*.js"
    ],
    out: "build"
};

gulp.task("build", function() {
    return gulp
        .src(paths.src)
        .pipe(gulp.dest(paths.out));
});

gulp.task("watch", function() {
    gulp.watch(paths.src, ["build"]);
});

gulp.task("default", ["watch"]);
