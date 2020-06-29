// Imports
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

require("babel-register");

// var JS_DIR = path.resolve(__dirname, "RELATIVE_PATH_TO_ENTRY_JS");
// var CSS_DIR = path.resolve(__dirname, "RELATIVE_PATH_TO_ENTRY_SCSS");
// var BUILD_DIR = path.resolve(__dirname, "RELATIVE_PATH_TO_OUTPUT_FOLDER");

var JS_DIR = path.resolve(__dirname, 'wp-content/themes/yours/src/js');
var CSS_DIR = path.resolve(__dirname, 'wp-content/themes/yours/src/style');
var BUILD_DIR = path.resolve(__dirname, 'wp-content/themes/yours/dist');


// Webpack Configuration
const config = {
  devtool: "source-map",
  entry: {
    script: [JS_DIR + "/entry-scripts.js"],
    css: CSS_DIR + "/style.scss",
  },
  // exclude jquery
  externals: {
    jquery: "jQuery",
    // foundation: 'Foundation'
  },

  // Output
  output: {
    path: BUILD_DIR,
    filename: "[name].js",
  },

  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry", //"usage" | "entry" | false,
                  // "modules": false,
                  debug: false, //  debug to see some reasoning which script/module requires which polyfills
                },
              ],
            ],
          },
        },
      },
      /* css and scss*/
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { sourceMap: false },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              url: false, // this let webpack ignore altering urls (relates to background images and also fonts)
            },
          },
          {
            loader: "resolve-url-loader",
            options: { sourceMap: false },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false,
              minimize: true,
            },
          },

          {
            loader: "sass-loader",
            options: { sourceMap: false },
          },
        ],
      },
      // {
      /* images in scss , no need for this */
      // test: /\.(|svg|jpg|png)?$/,
      //   use: [{
      //     loader: 'file-loader'
      //   }]
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //           loader: 'file-loader?name=../fonts/[name].[ext]' // make this relative to the final css file
      // },
    ],
  },

  optimization: {
    splitChunks: {
      // chunks: 'all'
    },
    /* enable in the production file */
    minimizer: [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true, // remove console log
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({})
        ]
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  // Plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../dist/style.css",
    }),
  ],
};

// Exports
module.exports = config;
