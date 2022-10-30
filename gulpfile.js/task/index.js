const requireDir = require("require-dir");
const task = requireDir("./", { recurse: true });

module.exports = task;
