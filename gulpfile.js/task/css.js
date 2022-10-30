const css = () => {
  return $.gulp
    .src($.path.css.src, { sourcemaps: $.app.development })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "CSS",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.webpCss())
    .pipe($.gp.concat("main.css"))
    .pipe($.gp.cssimport())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.size({ title: "main.css" }))
    .pipe($.gulp.dest($.path.css.dest), { sourcemaps: $.app.development })
    .pipe(
      $.gp.rename({
        suffix: ".min",
      })
    )
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: "main.min.css" }))
    .pipe($.gulp.dest($.path.css.dest), { sourcemaps: $.app.development })
    .pipe($.browserSync.stream());
};

module.exports = css;
