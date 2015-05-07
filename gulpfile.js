var gulp = require("gulp"),
  concat = require("gulp-concat");

gulp.task("default", function() {
  // do something default
});

gulp.task("dev", function() {
  // compile js files for dev
  return gulp.src(["./public/javascripts/app.js", "./public/javascripts/controllers/*.js"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./public/javascripts/dev"));
});

gulp.task("deploy", function() {
  // compile js files for deploy
});
