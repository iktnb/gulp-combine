const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Config
const path = require("./config/path.js");

// Task
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");

// Server live-reload
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Gulp watcher

const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
};

// Tasks
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;

//Assembly
exports.dev = series(
  clear,
  parallel(html, scss, js, img),
  parallel(server, watcher)
);
