import gulp from 'gulp';
import eslint from 'gulp-eslint';
import nodemon from 'gulp-nodemon';
import livereload from 'gulp-livereload';
import runSequence from 'run-sequence';
import webpack from 'webpack-stream';

const base = 'app';

const paths = {
	entry: `${base}/client/index.js`,
	app: `${base}/client/**/*`,
	copy: 'index.html',
	dest: 'dist',
	js: `${base}/**/*.js`
};

gulp.task('lint', () => {
	return gulp.src(paths.js)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('build', ['lint'], () => {
	return gulp.src(paths.entry)
		.pipe(webpack(require('./webpack.config')))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('server', () => {
	nodemon({
		script: `${base}/server/server.js`,
		ignore: paths.app
	});
});

gulp.task('copy', () => {
	return gulp.src(paths.copy)
		.pipe(gulp.dest(paths.dest));
});

gulp.task('watch', () => {
	livereload.listen();
	gulp.watch(paths.app, ['build', livereload]);
	gulp.watch(paths.copy, ['copy', livereload]);
});

gulp.task('default', (done) => {
	runSequence('build', 'copy', 'server', 'watch', done);
});

