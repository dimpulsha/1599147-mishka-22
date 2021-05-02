const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const del = require("del");
const htmlmin = require("gulp-htmlmin")

//Clean
const clean = () => {
  return del("build");
}

exports.clean = clean;

//HTML

const htmlMin = () => {
  return gulp.src("source/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, collapseInlineTagWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.htmlMin = htmlMin;

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    browser: "firefox developer edition",
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

//build
const buildProject = (done) => {
  gulp.series(
    clean,
    gulp.parallel(
      htmlMin
    ),
  )
  done ();
};

exports.buildProject = buildProject;

exports.default = gulp.series(
  styles, server, watcher
);
