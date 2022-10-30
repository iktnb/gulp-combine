const webpack = require("webpack-stream");

const js = () => {
  return $.gulp
    .src($.path.js.src, { sourcemaps: $.app.development })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "JavaScript",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.babel())
    .pipe(webpack($.app.webpack))
    .pipe($.gulp.dest($.path.js.dest), { sourcemaps: $.app.development })
    .pipe($.browserSync.stream());
};

module.exports = js;
