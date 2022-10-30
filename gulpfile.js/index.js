const task = require("./services");
const { watcher, server, clear } = require("./helpers");

global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  path: require("./config/path.js"),
  app: require("./config/app.js"),
};

const build = $.gulp.series(
  clear,
  $.gulp.parallel(task.html, task.scss, task.js, task.img, task.font)
);

const dev = $.gulp.series(build, $.gulp.parallel(server, watcher));

exports.default = $.app.production ? build : dev;
