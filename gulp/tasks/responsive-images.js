var gulp = require('gulp'),
    responsive = require('gulp-responsive');
runSequence = require('run-sequence');

// gulp.task('responsive-images', function(callback) {
//     runSequence('responsive-images-logos','responsive-sponsor-images',
//         callback
//     )
// });

gulp.task('responsive-images', ['responsive-images-logos', 'responsive-speaker-images-jpg','responsive-speaker-images-png','responsive-sponsor-images', 'responsive-organizer-images','responsive-images-remaining-jpg','responsive-images-remaining-png'])

gulp.task('responsive-images-logos', function() {
    return gulp.src(['public/**/*logo-square.jpg', '!public/events/2015*/**', '!public/events/2016*/**'])
        .pipe(responsive({
            // produce multiple images from one source

            '**/*logo-square.jpg': [{
                width: 300,
                height: 300,
            }, {
                width: 600,
                height: 600,
                rename: {
                    suffix: '@2x'
                }
            }],
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
            ignoreAspectRatio: true,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('responsive-organizer-images', function() {
  return gulp.src(['public/**/organizers/*.jpg', '!public/events/2015*/**', '!public/events/2016*/**'])
    .pipe(responsive({
      '**/*.jpg': [{
        width: 300,
        height: 300,
      }, {
        width: 600,
        height: 600,
        rename: {
          suffix: '@2x'
        }
      }],
    }, {
      // global configuration
      quality: 80,
      errorOnEnlargement: false,
      withoutEnlargement: false,
      progressive: true,
      silent: true,
      withMetadata: false,
      ignoreAspectRatio: true,
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('responsive-speaker-images-png', function() {
    return gulp.src(['public/**/speakers/*.png', '!public/events/2015*/**', '!public/events/2016*/**'])
        .pipe(responsive({
            '**/*.png': [{
                width: 300,
                height: 300
            }, {
                width: 600,
                height: 600,
                rename: {
                    suffix: '@2x'
                }
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('responsive-speaker-images-jpg', function() {
    return gulp.src(['public/**/speakers/*.jpg', '!public/events/2015*/**', '!public/events/2016*/**'])
        .pipe(responsive({
            '**/*.jpg': [{
                width: 300,
                height: 300
            }, {
                width: 600,
                height: 600,
                rename: {
                    suffix: '@2x'
                }
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('responsive-sponsor-images', function() {
    return gulp.src(['public/img/sponsors/*.png', 'public/img/sponsors/*.jpg'])
        .pipe(responsive({
            '*.png': [{
                width: 200
            }, {
                width: 400,
                rename: {
                    suffix: '@2x'
                }
            }],
            '*.jpg': [{
                width: 200
            }, {
                width: 400,
                rename: {
                    suffix: '@2x'
                }
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist/img/sponsors'));
});


gulp.task('responsive-images-remaining-png', function() {
    return gulp.src(['public/**/*.png',
            '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*', '!public/**/sharing.jpg', '!**/logo-square.*', '!public/img/sponsor/*.*', '!public/**/organizers/*.jpg','!public/**/speakers/*.jpg','!public/**/speakers/*.png','!public/**/organizers/*.png',  '!public/events/2015*/**', '!public/events/2016*/**'
        ])
        .pipe(responsive({
            // produce multiple images from one source
            '**/*.png': [{
                width: '100%'
            }, {
                rename: {
                    suffix: '@2x'
                }
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            errorOnUnusedImage: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('responsive-images-remaining-jpg', function() {
    return gulp.src(['public/**/*.jpg','public/**/*.jpeg',
            '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*', '!public/**/sharing.jpg', '!**/logo-square.*', '!public/img/sponsor/*.*', '!public/**/organizers/*.jpg','!public/**/speakers/*.jpg','!public/**/speakers/*.png','!public/**/organizers/*.png',  '!public/events/2015*/**', '!public/events/2016*/**'
        ])
        .pipe(responsive({
            // produce multiple images from one source

            '**/*.jpeg': [{
                width: '100%'
            }, {
                rename: {
                    suffix: '@2x'
                }
            }],
            '**/*.jpg': [{
                width: '100%'
            }, {
                rename: {
                    suffix: '@2x'
                }
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            errorOnUnusedImage: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist'));
});