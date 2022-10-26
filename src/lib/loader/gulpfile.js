'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pkg = require('./package');
var scripts = {
      all: [
        'gulpfile.js',
        'src/loader.js',
        'demo/js/main.js',
        'test/*.js'
      ],
      demo: 'demo/js',
      min: 'loader.min.js',
      src: 'src/loader.js',
      dest: 'dist'
    };
var replacement = {
      regexp: /@\w+/g,
      filter: function (placeholder) {
        switch (placeholder) {
          case '@VERSION':
            placeholder = pkg.version;
            break;

          case '@YEAR':
            placeholder = (new Date()).getFullYear();
            break;

          case '@DATE':
            placeholder = (new Date()).toISOString();
            break;
        }

        return placeholder;
      }
    };

gulp.task('jscopy', function () {
  return gulp.src(scripts.src)
    .pipe(gulp.dest(scripts.demo))
    .pipe(gulp.dest(scripts.dest));
});

gulp.task('jshint', function () {
  return gulp.src(scripts.all)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

gulp.task('jscs', function () {
  return gulp.src(scripts.all)
    .pipe(plugins.jscs())
    .pipe(plugins.jscs.reporter());
});

gulp.task('js', ['jshint', 'jscs'], function () {
  return gulp.src(scripts.src)
    .pipe(plugins.replace(replacement.regexp, replacement.filter))
    .pipe(gulp.dest(scripts.demo))
    .pipe(gulp.dest(scripts.dest))
    .pipe(plugins.rename(scripts.min))
    .pipe(plugins.uglify({
      preserveComments: 'license'
    }))
    .pipe(gulp.dest(scripts.dest));
});

gulp.task('demo', function () {
  return gulp.src('demo/**')
    .pipe(gulp.dest('_gh_pages'));
});

gulp.task('release', ['js', 'demo'], function () {
  return gulp.src('dist/*.js')
    .pipe(gulp.dest('_gh_pages/js'))
    .pipe(gulp.dest('_releases/' + pkg.version));
});

gulp.task('watch', function () {
  gulp.watch(scripts.src, ['jscopy']);
});

gulp.task('default', ['watch']);
