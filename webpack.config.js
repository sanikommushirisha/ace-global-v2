const path = require("path");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: options.mode === "production" ? "[name].[contenthash].js" : "[name].[fullhash].js",
      chunkFilename: "[name].[contenthash].js",
      publicPath: "/"
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        root: __dirname,
        src: path.resolve(__dirname, "src"),
        "@pages": path.resolve(__dirname, "src/pages")
      }
    },
    module: {
      rules: [
        {
          test: /\.t(s|sx)$/,
          exclude: /node_modules|\.d\.ts$/,
          use: {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false
              }
            }
          }
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /[.module]?.s(a|c)ss$/,
          use: [
            options.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: options.mode !== "production"
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: options.mode !== "production"
              }
            }
          ]
        },
        {
          test: /\.html$/i,
          loader: "html-loader"
        },
        {
          test: /\.rst$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|pdf|jpe?g|gif|ico|json|webp)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name() {
                  return "[name].[ext]";
                }
              }
            },
            {
              loader: "webp-loader"
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: "asset/resource"
        }
      ]
    },
    devtool: options.mode === "production" ? false : "inline-source-map",
    devServer: {
      historyApiFallback: true,
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
        filename: "index.html",
        inject: "body"
      }),
      new MiniCssExtractPlugin({
        filename: options.mode === "production" ? "[name].[fullhash].css" : "[name].css",
        chunkFilename: options.mode === "production" ? "[id].[fullhash].css" : "[id].css"
      }),
      new Dotenv()
    ],
    performance: {
      // Units in Bytes
      maxAssetSize: 7500000, // = 7.5 MB
      maxEntrypointSize: 10000000 // = 10 MB
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin()]
    }
  };
};
