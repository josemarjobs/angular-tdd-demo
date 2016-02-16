var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function () {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['app'],
      routes: {
        '/bower_componentes': 'bower_componentes'
      }
    }
  })

  gulp.watch(['app/**/*.*'])
    .on('change', browserSync.reload);
})