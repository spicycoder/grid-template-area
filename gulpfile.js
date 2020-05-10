const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('default', () => {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
})