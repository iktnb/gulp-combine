const task = require("./task");

global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  path: require("./config/path.js"),
  app: require("./config/app.js"),
};

const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);
};

const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(task.html, task.scss, task.js, task.img, task.font)
);

const dev = $.gulp.series(build, $.gulp.parallel(task.server, watcher));

exports.default = $.app.production ? build : dev;
