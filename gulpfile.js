var gulp = require("gulp"),
  concat = require("gulp-concat"),
  watch = require("gulp-watch");

gulp.task("default", function() {
  // do something default
});

gulp.task("dev", function() {
  // compile js files for dev
  return gulp.src([
      "./public/javascripts/app.js", 
      "./public/javascripts/services/*.js", 
      "./public/javascripts/controllers/*.js"
    ])
    .pipe(watch([
      "./public/javascripts/app.js", 
      "./public/javascripts/services/*.js", 
      "./public/javascripts/controllers/*.js"
     ]))
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./public/javascripts/dev"));
});

gulp.task("watch", function() {
  // watch for changes in js files
  return gulp.watch([
      "./public/javascripts/app.js", 
      "./public/javascripts/services/*.js", 
      "./public/javascripts/controllers/*.js"
    ], ["dev"]);
});

gulp.task("deploy", function() {
  // compile js files for deploy
});
