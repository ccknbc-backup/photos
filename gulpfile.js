var gulp = require('gulp')
var imagemin = require('gulp-imagemin')


// 壓縮 public/uploads 目錄內圖片
gulp.task('minify-images', async () => {
  gulp.src('./blog/**/*.*')
    .pipe(imagemin({
      optimizationLevel: 7, // 類型：Number  預設：3  取值範圍：0-7（優化等級）
      progressive: true, // 類型：Boolean 預設：false 無失真壓縮jpg圖片
      interlaced: true, // 類型：Boolean 預設：false 隔行掃描gif進行渲染
      multipass: true // 類型：Boolean 預設：false 多次優化svg直到完全優化
    }))
    .pipe(gulp.dest('./blog'))
})

// 執行 gulp 命令時執行的任務
gulp.task('default', gulp.parallel(
  'minify-images'
))
