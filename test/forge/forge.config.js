const IncompatibleBinaries = require("../../forge-plugin");

module.exports = {
  packagerConfig: {},
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/renderer.ts",
              name: "main_window",
            },
          ],
        },
      },
    ],
    new IncompatibleBinaries(),
  ],
};
