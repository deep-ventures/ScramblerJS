var gulp = require("gulp");
var concat = require("gulp-concat");

var paths = {
    assets: [
        "assets/**/*"
    ],
    src: [
        "node_modules/alertify.js/dist/js/alertify.js",
        "src/**/*.js"
    ],
    out: "build"
};

gulp.task("assets", function() {
    return gulp
        .src(paths.assets)
        .pipe(gulp.dest(paths.out + "/assets"));
});

gulp.task("build", function() {
    return gulp
        .src(paths.src)
        .pipe(concat('scrambler.js'))
        .pipe(gulp.dest(paths.out));
});

gulp.task("watch", function() {
    gulp.watch(paths.assets, ["assets"]);
    gulp.watch(paths.src, ["build"]);
});

gulp.task("default", ["assets", "build", "watch"]);
