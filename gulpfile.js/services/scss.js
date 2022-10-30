const sass = require("gulp-sass")(require("sass"));

const scss = () => {
  return $.gulp
    .src($.path.scss.src, { sourcemaps: $.app.development })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.webpCss())
    .pipe($.gp.sassGlob())
    .pipe(sass())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.size({ title: "main.css" }))
    .pipe($.gulp.dest($.path.scss.dest), { sourcemaps: $.app.development })
    .pipe(
      $.gp.rename({
        suffix: ".min",
      })
    )
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: "main.min.css" }))
    .pipe($.gulp.dest($.path.scss.dest), { sourcemaps: $.app.development })
    .pipe($.browserSync.stream());
};

module.exports = scss;
