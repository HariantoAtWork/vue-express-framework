console.time('Loading plugins');  
// --- INIT
const  
    timer        = require('./resources/js/util/timer.js'),
    path         = require('path'),
// gulp
    gulp         = require('gulp'),  
    less         = require('gulp-less'), // compiles less to CSS
    autoprefix   = require('gulp-autoprefixer'), // CSS browser compatibility
    cssmin       = require('gulp-clean-css'), // minifies CSS
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'), // minifies JS
    rename       = require('gulp-rename'),
// server
    nodemon      = require('gulp-nodemon'),
    livereload   = require('gulp-livereload'),
    notifier     = require('node-notifier');
// browserify goodies
var browserify   = require('browserify'),  
    babelify     = require('babelify'),
    partialify   = require('partialify'),
    buffer       = require('vinyl-buffer'),
    source       = require('vinyl-source-stream');
    sourcemaps   = require('gulp-sourcemaps');
console.timeEnd('Loading plugins');


// Paths variables
var paths = {  
    'resources': {
        'less'             : './resources/less/',
        'js'               : './resources/js/',
        'vue'              : './resources/vue/',
        'bower_components' : './resources/bower_components/',
        'vendor'           : './resources/vendor/' // front-end(css/js) things that has not yet Bower support
    },
    'public': {
        'css'              : './public/stylesheets/',
        'js'               : './public/javascripts/'
    }

};

var mix = {  
    /**
     * Get a standard Browserify stream.
     *
     * @param {string|array} src
     * @param {object}       options
     */
    browserify: function (src, options) {
        var stream = browserify(src, options);

        stream.transform(babelify, { stage: 0 });
        stream.transform(partialify);

        return stream.bundle();
    }
}

// --- TASKS INDEX
/*
    less
    less:bootstrap
    js
    js:bower_components
    js:browserify
    reload
    reload:browser
    reload:server
    watch
    watch:bootstrap
    watch:bower_components
    watch:browserify
    default
 */
// --- TASKS INDEX



// --- TASKS
// CSS bootstrap
gulp.task('less:bootstrap', function() {  
  // place code for your default task here
  // destination folder: /assets/css/ 
  return gulp.src(paths.resources.less+'app.bootstrap.less') // get file
    .pipe(less())
    .pipe(autoprefix({ browsers: ['last 4 versions'] }))
    .pipe(gulp.dest(paths.public.css)) // output: app.bootstrap.css
    .pipe(cssmin({keepSpecialComments:0}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.public.css)); // output: app.bootstrap.min.css
});

// JS bower_components
gulp.task('js:bower_components', function(){  
  return gulp.src([
        // jquery
        paths.resources.bower_components+'jquery/dist/jquery.js',
        // twitter bootstrap javascript modules
        paths.resources.bower_components+'bootstrap/js/affix.js',
        paths.resources.bower_components+'bootstrap/js/alert.js',
        paths.resources.bower_components+'bootstrap/js/button.js',
        paths.resources.bower_components+'bootstrap/js/carousel.js',
        paths.resources.bower_components+'bootstrap/js/collapse.js',
        paths.resources.bower_components+'bootstrap/js/dropdown.js',
        paths.resources.bower_components+'bootstrap/js/modal.js',
        paths.resources.bower_components+'bootstrap/js/popover.js',
        paths.resources.bower_components+'bootstrap/js/scrollspy.js',
        paths.resources.bower_components+'bootstrap/js/tab.js',
        paths.resources.bower_components+'bootstrap/js/tooltip.js',
        paths.resources.bower_components+'bootstrap/js/transition.js',
        // twitter bootstrap all
        //paths.resources.bower_components+'bootstrap/dist/js/bootstrap.js',
    ])
    .pipe(concat('bower_components.min.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.public.js)); // destination: /public/javascripts/bower_components.min.js
});

// Browserify
gulp.task('js:browserify', function() {  
  mix.browserify(paths.resources.vue+'/bootstrap.vue.js')
    .pipe(source('app.browserify.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.public.js)); // destination: /public/javascripts/app.browserify.js
});


// --- WATCH
// Rerun the task when a file changes
gulp.task('watch:bootstrap', function() {  
    gulp.watch(
        [
            paths.resources.less+'*.less',               // files contain .less
            paths.resources.less+'**/*.less'
        ],                                               // sub directories with files contain .less
        ['less:bootstrap']);                             // run parallel gulp tasks on change
});

gulp.task('watch:bower_components', function() {  
    gulp.watch(
        [
            paths.resources.bower_components+'*.js',     // files contain .js
            paths.resources.bower_components+'**/*.js'   // sub directories with files contain .js
        ], 
        ['js:bower_components']);                        // run parallel gulp tasks on change
});

gulp.task('watch:browserify', function() {  
    gulp.watch(
        [
            'package.json',
            paths.resources.vue+'*.js',
            paths.resources.vue+'**/*.js',
            paths.resources.vue+'**/*.html',
            paths.resources.vue+'**/*.vue',
        ],
        ['js:browserify']);                              // run parallel gulp tasks on change
});

// --- RELOAD
/**
 * Reload: Livereload
 */
gulp.task('reload:browser', function(){  
    var options = {
        // base will check changes on 'public' folder
        base: "public"
    };
    livereload.listen(options);
    gulp.watch([
            'public/**/*.html', 
            'public/**/*.css',
            'public/javascripts/app.browserify.js', 
            'public/javascripts/bower_components.min.js', 
        ])
        .on('change', function(event){
            livereload.changed(event);
            notifier.notify({ message: timer.lapse()+': Browser refreshed' });
        });
});

/**
 * Reload: Node server
 */
gulp.task('reload:server', function(){  
    nodemon({ 
        script: './bin/www',    // script to start the server
        ext: 'js, hbs',         // file type to watch, for example *.js, *.hbs 
        watch: [
            'bin/www',          // server script
            'app.js',           // app script
            'views',            // hbs files
            'routes'            // routes
        ]})
        .on('change', function (event) {
            notifier.notify({ message: timer.lapse()+': Node CHANGE: '+event });
        })
        .on('start', function (event) {
            notifier.notify({ message: timer.lapse()+': Node start' });
            setTimeout(function(){
                livereload.changed('/');
                notifier.notify({ message: timer.lapse()+': Livereload: Node start' });
            }, 1000);
        })
        .on('restart', function (event) {
            notifier.notify({ message: timer.lapse()+': Node restarted' });
            setTimeout(function(){
                livereload.changed('/');
                notifier.notify({ message: timer.lapse()+': Livereload: Node restart' });
            }, 1000);
        });
});



// --- COMBINED TASKS
gulp.task('less',   ['less:bootstrap']);  
gulp.task('js',     ['js:bower_components','js:browserify']);  
gulp.task('reload', ['reload:server', 'reload:browser']);
gulp.task('watch',  ['watch:bootstrap', 'watch:bower_components', 'watch:browserify']);
gulp.task('export', ['less', 'js']);

// --- DEFAULT
// When you run only with: `gulp`
gulp.task('default', ['watch', 'export']); 