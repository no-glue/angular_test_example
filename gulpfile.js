var gulp = require("gulp"),
  concat = require("gulp-concat"),
  watch = require("gulp-watch"),
  uglify = require("gulp-uglify"),
  lreload = require("gulp-livereload");

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
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./public/javascripts/dev"))
    .pipe(lreload());
});

gulp.task("deploy", function() {
  // compile js files for deploy
  return gulp.src([
      "./public/javascripts/app.js", 
      "./public/javascripts/services/*.js", 
      "./public/javascripts/controllers/*.js"
    ])
    .pipe(uglify())
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./public/javascripts/deploy"));
});

gulp.task("watch", function() {
  // watch for changes in js files
  return gulp.watch([
      "public/javascripts/app.js", 
      "public/javascripts/services/*.js", 
      "public/javascripts/controllers/*.js"
    ], ["dev"]);
});

