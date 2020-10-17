const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = () => (
  gulp.src('blog/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 7}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ], {
    verbose: true
  }))
		.pipe(gulp.dest('blog'))
);
