/* 
gulp is only used to watch and run browser-sync 
find this easier to configure than webpack for watching and performance is good.
also watch all file types
*/
const gulp = require( 'gulp' );
const browserSync = require( 'browser-sync' );//.create();

// const LOCALSERVER = "http://YOUR_DEV_SERVER";
const LOCALSERVER = "http://larslo.larslo/foundation_build";
const PORT = 8000;

// Start a server with BrowserSync to preview the site in
gulp.task( 'browser-sync', function() {
	browserSync.create();
	browserSync.init( {
		proxy: LOCALSERVER, 
		port: PORT,
	} );
} );

// Watch for changes to static assets, pages, Sass, and JavaScript
gulp.task( 'watch', function() {
	/* watch the bundles files*/
	gulp.watch( 'wp-content/themes/yours/dist/style.css' ).on( 'change', browserSync.reload );
	gulp.watch( 'wp-content/themes/yours/dist/script.js' ).on( 'change', browserSync.reload );
	gulp.watch( 'index.html' ).on( 'change', browserSync.reload );
	
	// watch some php files
	// gulp.watch( '../../mu-plugins/A_PLUGIN/**/*.php' ).on( 'change', browserSync.reload );
	// watch some blocks while building them
	// gulp.watch( '../../mu-plugins/larslo-block-builder/assets/js/*.js' ).on( 'change', browserSync.reload );
	// gulp.watch( '../../mu-plugins/larslo-block-builder/assets/css/*.css' ).on( 'change', browserSync.reload );
} );

gulp.task( 'default', gulp.parallel( "browser-sync", "watch" ) );
