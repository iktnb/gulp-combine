const production = process.argv.includes("--production");
const dev = !production;

module.exports = {
  production: production,
  development: dev,

  htmlmin: {
    collapseWhitespace: production,
  },
  pug: {
    pretty: dev,
  },
  webpack: {
    mode: production ? "production" : "development",
  },
  imagemin: {
    verbose: true,
  },
  fonter: {
    formats: ["ttf", "woff", "svg"],
  },
};
