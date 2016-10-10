var gulp = require('gulp'),
    argv = require('yargs').argv,
    server = require( 'gulp-develop-server'),
    $ = require('gulp-load-plugins')(),
    sassdoc = require('sassdoc'),
    del = require('del'),
    open = require('open');


//clean
gulp.task('clean', function () {
  return del([
    'public'
  ]);
});

//style
gulp.task('sass', function () {
    gulp.src('private/sass/**/*.scss')
        .pipe($.plumber())
        .pipe(sassdoc({
            package: {
                title: "JVenerosy",
                version: "0.1.0",
                description: "Base for new website"
            },
            groups: {
                undefined: "Comportement par défaut"
            },
            dest: "public/documentation",
            options: {
                sort: "access",
                display: {
                    access: ['public', 'private'],
                    alias: true,
                    watermark: true,
                }
            }
        }))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.csscomb('private/sass/.csscomb.json'))

        .pipe(gulp.dest('public/css'))

        .pipe($.livereload());
});

//js
gulp.task('javascript', function () {
    gulp.src('private/js/dev/app.js')
        .pipe($.plumber())
        .pipe($.webpack({
          output: {
            path: __dirname + "/public/js",
            filename: "app.js"
          },
          module: {
            loaders: [
              {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets : ['es2015']
                }
              },
            ],
          },
        }))
        .pipe($.jshint())
        .pipe($.uglify())

        .pipe(gulp.dest('public/js/'))
        .pipe($.livereload());
});

//Images
//minify
gulp.task('image', function () {
    gulp.src(['private/img/**/*.png', 'private/img/**/*.jpeg', 'private/img/**/*.jpg', 'private/img/**/*.gif', 'private/img/**/*.pdf'])
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('public/img/'))

        .pipe($.livereload());
});
//sprite svg
gulp.task('sprite', function () {
    gulp.src(['private/img/svg/*.svg'])
        .pipe($.svgstore())
        .pipe(gulp.dest('public/img/'))

        .pipe($.livereload());
});

//watcher
gulp.task('watch', function () {
    $.livereload.listen();

    gulp.watch('private/img/svg/*.svg', ['sprite', 'sass']);
    gulp.watch(['private/img/**/*.png', 'private/img/**/*.jpeg', 'private/img/**/*.jpg', 'private/img/**/*.gif'], ['image', 'sass']);
    gulp.watch('private/sass/**/*.scss', ['sass']);
    gulp.watch('private/js/dev/**/*.js', ['javascript']);
});

// server
var serverOptions = {
    path: './private/js/server.js'
};
var serverFiles = [
    'views/**/*html.twig',
    './private/js/server.js'
];

gulp.task( 'server:start', function() {
    server.listen( serverOptions, $.livereload.listen );
});

//open browser
gulp.task('open', function () {
    open("http://localhost:9740/");
});


//restart server
var restartServer = function(){
    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) $.livereload.changed( file.path );
        });
    }

    gulp.watch( serverFiles ).on( 'change', restart );
};

//tâche par défaut
gulp.task('default', ['server:start', 'image', 'sprite', 'sass', 'javascript', 'watch'], function(){
    restartServer();
});
gulp.task('load', ['server:start', 'open', 'image', 'sprite', 'sass', 'javascript', 'watch'], function(){
    restartServer();
});
gulp.task('run', ['server:start', 'image', 'sprite', 'sass', 'javascript']);
