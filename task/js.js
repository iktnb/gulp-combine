const { src, dest } = require("gulp");

// Config
const app = require("../config/app.js");
const path = require("../config/path.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

// Pug handler
const js = () => {
  return src(path.js.src, { sourcemaps: app.development })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JavaScript",
          message: error.message,
        })),
      })
    )
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest), { sourcemaps: app.development });
};

module.exports = js;
