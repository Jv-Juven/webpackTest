var gulp = require('gulp');
var uglify = require('gulp-uglify');
var taskListing = require('gulp-task-listing');
console.log(gulp);
gulp.task("default", function () {
	// gulp.src("./minyilee/**/*.js")
	// 	.
});

gulp.task("css", ["css-lib", "css-src"]);
gulp.task("css-lib", function () {});
gulp.task("css-src", function () {});

gulp.task("uglify", function () {
	// console.log(uglify);
	// gulp.src("src/iscroll.js")
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest("dist/"));
});


// 列出所有任务
gulp.task("help", taskListing);
