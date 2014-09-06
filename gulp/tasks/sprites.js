var gulp       = require('gulp');
var path       = require('path');
var config     = require('../config');

gulp.task('sprites', function() {
	var dest = path.join(config.buildPath, config.scriptDestPath);

	return gulp.src(config.spriteSrcFile)
		.pipe(gulp.dest(dest));
});
