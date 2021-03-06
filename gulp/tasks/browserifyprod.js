/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify      = require('browserify');
var watchify        = require('watchify');
var bundleLogger    = require('../util/bundleLogger');
var config          = require('../config');
var gulp            = require('gulp');
var handleErrors    = require('../util/handleErrors');
var source          = require('vinyl-source-stream');
var streamify       = require('gulp-streamify');
var uglify          = require('gulp-uglify');
var reactify        = require('reactify');
var path            = require('path');

gulp.task('browserifyprod', function() {
    
    var bundleMethod = config.isWatching ? watchify : browserify;

    var bundler = bundleMethod({
        // Specify the entry point of your app
        entries: [path.join(config.scriptSrcPath, config.appStartFileName)],
        // Add file extentions to make optional in your requires
        extensions: ['.hbs']
    });

    var bundle = function() {
        // Log when bundling starts
        bundleLogger.start();

        return bundler
            // prevent jquery & underscore from
            // being required by exoskeleton
            .exclude('jquery')
            .exclude('underscore')

            // compile jsx
            .transform({}, reactify)            

            // Enable source maps!
            .bundle({
                debug: true
            })

            // Report compile errors
            .on('error', handleErrors)

            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specifiy the
            // desired output filename here.
            .pipe(source(config.appStartFileName))

            // uglify
            .pipe(streamify(uglify()))

            // Specify the output destination
            .pipe(gulp.dest(path.join(config.buildPath, config.scriptDestPath)))
            
            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    if (config.isWatching) {
        // Rebundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
});