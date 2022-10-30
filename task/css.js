const { src, dest } = require("gulp");

// Config
const path = require("../config/path.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const webpcss = require("gulp-webp-css");
const app = require("../config/app.js");

// Css handler
const css = () => {
  return src(path.css.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "CSS",
          message: error.message,
        })),
      })
    )
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpcss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
    .pipe(dest(path.css.dest), { sourcemaps: app.development })
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(csso())
    .pipe(size({ title: "main.min.css" }))
    .pipe(dest(path.css.dest), { sourcemaps: app.development });
};

module.exports = css;
