const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:9005/"
        : "https://mf-viewpoint-grid.vercel.app/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  devServer: {
    port: 9005,
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "grid",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Grid": "./src/Grid",
      },
      // shared: { react: { singleton: true }, "react-dom": { singleton: true } }, // share the same version of react and react-dom
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
