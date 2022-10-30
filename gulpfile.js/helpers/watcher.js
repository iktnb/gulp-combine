const task = require("../services");

const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);
};

module.exports = watcher;
